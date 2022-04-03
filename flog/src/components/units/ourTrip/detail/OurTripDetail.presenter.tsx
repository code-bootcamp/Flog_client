import Dompurify from "dompurify";
import { v4 as uuid4 } from "uuid";

import * as Detail from "./OurTripDetail.styles";
export default function OurTripDetailUI(props) {
  console.log(props.isMine)
  return (
    <Detail.Container  isMine={props.isMine}>
      { props.data?.fetchBoard.map((el:any,index:number) => ( 
         <Detail.Wrapper isShow={props.isShow[index]} ref={props.moveRef[index]} key={uuid4()}>
        {el ?<>
          <Detail.Day>{index + 1}일차</Detail.Day> 
        <Detail.Contents>

          <div key={uuid4()}>
            <Detail.DayContents
              dangerouslySetInnerHTML={{  
                __html: Dompurify.sanitize(String(el.content)),
              }}
            />
          </div>

        </Detail.Contents>
        </> 
       
        
        : <Detail.Empty>아직 여행 로그가 없습니다.</Detail.Empty>}
        </Detail.Wrapper>

      ))
    
    }
    </Detail.Container>
  );
}
