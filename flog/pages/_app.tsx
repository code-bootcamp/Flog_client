import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/styles/Global.styles";
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
    if (localStorage.getItem("accessToken"))
      setAccessToken(localStorage.getItem("accessToken") || "{}");
  }, []);
  const uploadLink = createUploadLink({
    uri: "http://34.64.249.11:3000/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
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
