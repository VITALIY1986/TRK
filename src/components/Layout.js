import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import Header from "./Header";

import Footer from "./Footer";
import client from "./ApolloClient";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";
import { AuthContextProvider } from './login-function/auth-context';
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout = (props) => {
  
  return (
 
   
   
        <div>
          <Head>
            <title>4Prof next.js</title>
          </Head>
          <Header />
        
          {props.children}
          <Footer />
        </div>
  
  );
};

export default Layout;
