import { createClient } from "contentful";
import config from "../utils/config.json";
import React, { useState, useEffect } from "react";

import { Portal } from "react-portal";

import Seo from "../components/Seo";
import Articles from "../components/Articles";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PreloaderComponent from "../components/Preloader";
import CookieComponent from "../components/CookieComponent";
import Layout from '../components/Layout'

const ogImg = "../static/4.jpg";

// Instantiate the app client
const client = createClient({
  space: config.space,
  accessToken: config.accessToken
});

const IndexPage = props => {
  const [preloader, setPreloader] = useState(true);
  const [scrollToTop, setscrollToTop] = useState(false);
  const [origin, setOrigin] = useState("");
  const [cookie, setCookie] = useState(true);
const [articlesArr, setArticlesArr]=useState([])
  useEffect(() => {
    const { body } = document;
    console.log(props.entries.items);
    setArticlesArr(props.entries.items);


    setOrigin(window.location.origin);

    body.setAttribute("style", "overflow-y:hidden");
    window.addEventListener("scroll", _onScroll);
    if (localStorage.getItem("cookies") !== null) {
      setCookie(false);
    }
    setTimeout(() => {
      turnOffPreloader();
    }, 1000);
  }, []);

  const _onScroll = () => {
    if (window.scrollY > 5) {
      setscrollToTop(true);
    }

    if (window.scrollY < 25) {
      setscrollToTop(false);
    }
  };

  const turnOffPreloader = () => {
    const { body } = document;

    setTimeout(() => {
      setPreloader(false);
      body.setAttribute("style", "overflow-y:auto");
    }, 500);
  };
  const setSessionStorage = () => {
    localStorage.setItem("cookies", "true");
    setCookie(false);
  };
  return (
    <>
      {preloader && (
        <Portal>
          <PreloaderComponent />
        </Portal>
      )}
      <Layout>
        <div style={preloader ? { opacity: 0 } : {}}>
          <Seo
            title="Fulcrum Blog –  The Latest News, Stories from Fulcrum"
            description="Discover the latest stories & news from Fulcrum."
            image={ogImg}
          />

          <Header scrollToTop={scrollToTop} origin={origin} />

          <Articles articlesArr={articlesArr}/>
          <Footer origin={origin} />
          {cookie && (
            <Portal>
              <CookieComponent
                setSessionStorage={setSessionStorage}
                preloader={preloader}
              />
            </Portal>
          )}
        </div>
        </Layout>
    </>
  );
};
IndexPage.getInitialProps = async () => {
  const entries = await client.getEntries({
    content_type: "blogPost"
  });

  // Inject in props of our screen component
  return { entries };
};
export default IndexPage;
