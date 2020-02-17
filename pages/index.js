import React, { useEffect } from "react";
import Link from "next/link";
import { withContentful } from "next-contentful";
import App, { Container } from 'next/app';
// Contentful config properties
const space = "q3zcl005fqwg";
const accessToken = "RPrUdMfYY0V4ZO6IfUYTBxPQPHxkr3UYoEypDCRshUI";
const host = "cdn.contentful.com";
const locale = "es-US";
class MyApp extends App {
    static async getInitialProps({ Component, ctx, router }) {
      let pageProps = {};
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ ctx });
      }
  
      return { pageProps };
    }
  
    render() {
      const {
        Component,
        pageProps,
        store,
      } = this.props;
  
      return (
        <Container>
          <Component {...pageProps} />
        </Container>
      );
    }
  }
  
  export default withContentful(
    space,
    accessToken,
    host,        
    locale,       
  )(MyApp);