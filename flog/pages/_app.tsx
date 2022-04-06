import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/styles/Global.styles";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
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
  // 1. 발표용 임시 로그인 세팅 (localStorage 이용)
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken") || "");
    }
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  // 2. restoreToken API 이용한 로그인 방식 (원래 방식)
  // useEffect(() => {
  //   getAccessToken().then((newAccessToken) => {
  //     setAccessToken(newAccessToken);
  //   });
  // }, []);

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   if (graphQLErrors) {
  //     for (const err of graphQLErrors) {
  //       if (err.extensions.code === "UNAUTHENTICATED") {
  //         getAccessToken().then((newAccessToken) => {
  //           setAccessToken(newAccessToken);
  //           operation.setContext({
  //             headers: {
  //               ...operation.getContext().headers,
  //               Authorization: `Bearer ${newAccessToken}`,
  //             },
  //           });
  //           return forward(operation);
  //         });
  //       }
  //     }
  //   }
  // });

  const uploadLink = createUploadLink({
    uri: "https://gyeoriii.shop/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    // 1. 발표용 임시 로그인 세팅 (localStorage 이용)
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    // 2. restoreToken API 이용한 로그인 방식 (원래 방식)
    // link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
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
