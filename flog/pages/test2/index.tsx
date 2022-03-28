import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileVaildation } from "../../src/commons/libraries/fileUtility";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
// @ts-ignore
export default function getGqlFromTypes() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [queries, setQueries] = useState<String[]>([]);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      const fileReader = new FileReader();
      let fileContentArray: string[] = [];
      let queryList: { apiName: string; returnType: string }[] = [];
      let mutationList: { apiName: string; returnType: string }[] = [];
      let types: any = [];
      let 찐막 = [];
      let gqlList: string[] = [];
      fileReader.onload = function (progressEvent) {
        let isQuery = false;
        let isMutation = false;
        fileContentArray = this.result.split(/\r\n|\n/);
        fileContentArray = fileContentArray.map((el) => el.trimStart());
        fileContentArray = fileContentArray.filter(
          (el) => !el.startsWith("__typename")
        );
        // export type IUseditem
        let isStart = false;
        let cnt = 0;

        for (let i = 0; i < fileContentArray.length; i++) {
          if (
            fileContentArray[i].startsWith("export type I") &&
            !fileContentArray[i].includes("Input") &&
            !fileContentArray[i].includes("Args")
          ) {
            types.push({
              name: `${fileContentArray[i]
                .replace("export type ", "")
                .replace(" = {", "")}`,
              value: [],
            });
            isStart = true;
            continue;
          }
          if (isStart && fileContentArray[i] === "};") {
            isStart = false;
          }
          if (isStart) {
            if (fileContentArray[i].split(":")[1].includes("Scalars")) {
              types[types.length - 1].value = [
                ...types[types.length - 1].value,
                fileContentArray[i].split(":")[0].replace("?", ""),
              ];
            } else {
              types[types.length - 1].value = [
                ...types[types.length - 1].value,
                {
                  name: fileContentArray[i].split(":")[0].replace("?", ""),
                  type: fileContentArray[i]
                    .split(":")[1]
                    .replace("Maybe", "")
                    .replace("Array", "")
                    .replaceAll("<", "")
                    .replaceAll(">", "")
                    .replaceAll(";", "")
                    .trimStart(),
                },
              ];
            }
          }
        }
        types = types.filter(
          (el) => el.name !== "IMutation" && el.name !== "IQuery"
        );
        for (let i = 0; i < types.length; i++) {
          const length = types[i].value.length;
          for (let j = 0; j < length; j++) {
            if (typeof types[i].value[j] === "object") {
              for (let k = 0; k < types.length; k++) {
                if (types[k].name === types[i].value[j].type) {
                  types[i].value[j] = {
                    name: types[i].value[j].name,
                    type: [...types[k].value],
                  };
                }
              }

              const length2 = types[i].value[j].type.length;
              for (let n = 0; n < length2; n++) {
                if (typeof types[i].value[j].type[n] === "object") {
                  for (let k = 0; k < types.length; k++) {
                    if (types[k].name === types[i].value[j].type[n].type) {
                      types[i].value[j].type[n] = {
                        name: types[i].value[j].type[n].name,
                        type: [
                          ...types[k].value.filter(
                            (el) => typeof el !== "object"
                          ),
                        ],
                      };
                    }
                  }
                }
              }
            }
          }
        }

        console.log("types!!!!!", types);
        console.log("queryList", queryList);
        for (let i = 0; i < fileContentArray.length; i++) {
          if (
            String(fileContentArray[i]).startsWith("export type IMutation = {")
          ) {
            isMutation = true;
            continue;
          }
          if (
            String(fileContentArray[i]).startsWith("export type IQuery = {")
          ) {
            isQuery = true;
            continue;
          }
          if (isMutation && String(fileContentArray[i]) === "};") {
            isMutation = false;
            continue;
          }
          if (isQuery && String(fileContentArray[i]) === "};") {
            isQuery = false;
            continue;
          }

          if (!isQuery && !isMutation) continue;

          if (isQuery || isMutation) {
            const name = fileContentArray[i].split(":")[0];
            let typeName = fileContentArray[i]
              .split(":")[1]
              .replace(" ", "")
              .replace("Array<", "")
              .replace(">", "")
              .replace(";", "");
            if (typeName.startsWith("Scalars")) typeName = "scalars";
            isQuery
              ? queryList.push({ apiName: name, returnType: typeName })
              : mutationList.push({ apiName: name, returnType: typeName });
          }
        }

        for (let j = 0; j < queryList.length; j++) {
          gqlList.push("query ");
          const args: { name: string; type: string; isNullable: boolean }[] =
            [];
          let isArgs = false;
          let isReturn = false;
          for (let k = 0; k < fileContentArray.length; k++) {
            if (
              fileContentArray[k]
                .toUpperCase()
                .startsWith(
                  `export type IQuery${queryList[j].apiName}Args`.toUpperCase()
                )
            ) {
              isArgs = true;
              continue;
            }

            if (
              fileContentArray[k]
                .toUpperCase()
                .startsWith(
                  `export type ${queryList[j].returnType}`.toUpperCase()
                )
            ) {
              isReturn = true;
              continue;
            }
            if (isArgs && fileContentArray[k] === "};") isArgs = false;
            if (isReturn && fileContentArray[k] === "};") {
              isReturn = false;
            }
            if (isArgs) {
              let isNullable = false;
              const argName = fileContentArray[k].split(":")[0];
              if (fileContentArray[k].split(":")[0].endsWith("?")) {
                argName.replace("?", "");
                isNullable = true;
              }
              const argType = fileContentArray[k]
                .split(":")[1]
                .replace(" ", "")
                .replace("Scalars['", "")
                .replace("']", "")
                .replace("InputMaybe<", "")
                .replace("Array<", "")
                .replace(">", "")
                .replace(";", "");
              args.push({
                name: argName.replace("?", ""),
                type: argType,
                isNullable: isNullable,
              });
            }
          }
          if (
            types.filter((el) => el.name === queryList[j].returnType).length > 0
          )
            찐막.push({
              gubun: "query",
              name: queryList[j].apiName,
              args: args,
              returnType: types.filter(
                (el) => el.name === queryList[j].returnType
              )[0].value,
            });
          else
            찐막.push({
              gubun: "query",
              name: queryList[j].apiName,
              args: args,
              returnType: "scalar",
            });
        }

        for (let j = 0; j < mutationList.length; j++) {
          gqlList.push("query ");
          const args: { name: string; type: string; isNullable: boolean }[] =
            [];
          let isArgs = false;
          let isReturn = false;
          for (let k = 0; k < fileContentArray.length; k++) {
            if (
              fileContentArray[k]
                .toUpperCase()
                .startsWith(
                  `export type IMutation${mutationList[j].apiName}Args`.toUpperCase()
                )
            ) {
              isArgs = true;
              continue;
            }

            if (
              fileContentArray[k]
                .toUpperCase()
                .startsWith(
                  `export type ${mutationList[j].returnType}`.toUpperCase()
                )
            ) {
              isReturn = true;
              continue;
            }
            if (isArgs && fileContentArray[k] === "};") isArgs = false;
            if (isReturn && fileContentArray[k] === "};") {
              isReturn = false;
            }
            if (isArgs) {
              let isNullable = false;
              const argName = fileContentArray[k].split(":")[0];
              if (fileContentArray[k].split(":")[0].endsWith("?")) {
                argName.replace("?", "");
                isNullable = true;
              }
              const argType = fileContentArray[k]
                .split(":")[1]
                .replace(" ", "")
                .replace("Scalars['", "")
                .replace("']", "")
                .replace("InputMaybe<", "")
                .replace("Array<", "")
                .replace(">", "")
                .replace(";", "");
              args.push({
                name: argName.replace("?", ""),
                type: argType,
                isNullable: isNullable,
              });
            }
          }
          if (
            types.filter((el) => el.name === mutationList[j].returnType)
              .length > 0
          )
            찐막.push({
              gubun: "mutation",
              name: mutationList[j].apiName,
              args: args,
              returnType: types.filter(
                (el) => el.name === mutationList[j].returnType
              )[0].value,
            });
          else
            찐막.push({
              gubun: "mutation",
              name: mutationList[j].apiName,
              args: args,
              returnType: "scalar",
            });
        }

        console.log(찐막);
        const 찐찐막 = 찐막.map((el) => {
          let underBarLocation = 0;
          for (let q = 0; q < el.name.length; q++) {
            if (el.name[q] === el.name[q].toUpperCase()) {
              underBarLocation = q;
              break;
            }
          }

          let queryString =
            el.gubun === "query" ? `query ${el.name}` : `mutation ${el.name}`;
          if (el.args.length > 0)
            queryString += `(${el.args.map(
              (arg) => `$${arg.name}: ${arg.type}${arg.isNullable ? "" : "!"}`
            )})\n `;
          queryString += "{\n\t";
          queryString += el.name;
          if (el.args.length > 0)
            queryString += `(${el.args.map(
              (arg) => `${arg.name}: $${arg.naåme}`
            )})`;
          if (el.returnType !== "scalar") {
            queryString += "{\n\t";

            for (let z = 0; z < el.returnType.length; z++) {
              console.log(el.returnType[z]);
              if (typeof el.returnType[z] === "object") {
                queryString += `${el.returnType[z].name} {`;
                el.returnType[z].type.map((asdasd) => {
                  if (typeof asdasd === "object") {
                    queryString += `${asdasd.name} {\n`;
                    asdasd.type.map((asdasd2) => {
                      queryString += `\n${asdasd2}`;
                    });
                    queryString += `\n}`;
                  } else queryString += `\n${asdasd}`;
                });
                queryString += `\n}`;
                queryString += `\n`;
              } else queryString += `${el.returnType[z]}\n`;
            }
            console.log(el.returnType);
            queryString += "\n}";
          }
          queryString += "\n}";
          return queryString;
        });
        setQueries(찐찐막);
      };
      await fileReader.readAsText(file);
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickFile = () => {
    fileRef.current?.click();
  };
  return (
    <div>
      <div
        onClick={onClickFile}
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
      >
        파일 선택
      </div>
      {queries.map((el) => (
        <div>
          <div style={{ marginBottom: "30px", fontSize: "20px" }}>{el}</div>
        </div>
      ))}
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </div>
  );
}
