import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/styles/Global.styles";
import Layout from "../src/components/commons/layout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface IGlobalContext {
  acessToken?: string;
  setAcessToken?: Dispatch<SetStateAction<string>>;
}
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [acessToken, setAcessToken] = useState("");

  const value = {
    acessToken,
    setAcessToken,
  };
  useEffect(() => {
    if (localStorage.getItem("acessToken"))
      setAcessToken(JSON.parse(localStorage.getItem("acessToken")) || "{}");
  }, []);
  const client = new ApolloClient({
    uri: "http://34.64.249.11:3000/graphql",
    headers: { Authorization: `Bearer ${acessToken}` },
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
