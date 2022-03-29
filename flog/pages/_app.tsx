import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/styles/Global.styles";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/components/commons/libraries/getAccessToken";
import Layout from "../src/components/commons/layout";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { createUploadLink } from "apollo-upload-client";

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");

  const value = {
    accessToken,
    setAccessToken,
  };
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 3. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 4. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 5. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // operation에 실패한 쿼리들 들어가있음
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            }); // 설정 변경(accessToken만!! 바꿔치기)
            return forward(operation); // 변경된 operation 재요청하기!!
          });
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    uri: "https://gyeoriii.shop/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={GlobalStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
