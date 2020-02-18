
import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import config from "../utils/config.json";
import { Portal } from "react-portal";

import Seo from "../components/Seo";
import Articles from "../components/Articles";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PreloaderComponent from "../components/Preloader";
import CookieComponent from "../components/CookieComponent";
import Layout from "../components/Layout";

const ogImg = "../static/4.jpg";

// Instantiate the app client
const client = createClient({
  space: config.space,
  accessToken: config.accessToken
});

const App = props => {
  const [preloader, setPreloader] = useState(true);
  const [scrollToTop, setscrollToTop] = useState(false);
  const [origin, setOrigin] = useState("");
  const [cookie, setCookie] = useState(true);
  const [articlesArr, setArticlesArr] = useState([]);
  useEffect(() => {
    const { body } = document;

    setOrigin(window.location.origin);

    body.setAttribute("style", "overflow-y:hidden");
    window.addEventListener("scroll", _onScroll);
    if (localStorage.getItem("cookies") !== null) {
      setCookie(false);
    }
    setTimeout(() => {
      turnOffPreloader();
    }, 1500);
    setArticlesArr(props.entries.items);

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
    }, 2000);
  };
  const setSessionStorage = () => {
    localStorage.setItem("cookies", "true");
    setCookie(false);
  };
  return (
    <div>
      {preloader && (
        <Portal>
          <PreloaderComponent />
        </Portal>
      )}
      <Layout/>
        <div style={preloader ? { opacity: 0 } : {}}>
          <Seo
            title="Fulcrum Blog –  The Latest News, Stories from Fulcrum"
            description="Discover the latest stories & news from Fulcrum."
            image={ogImg}
          />

          <Header scrollToTop={scrollToTop} origin={origin} />

          <Articles articlesArr={articlesArr} />
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
    </div>
  );
};
App.getInitialProps = async () => {
  const entries = await client.getEntries({
    content_type: "blogPost"
  });

  // Inject in props of our screen component
  return { entries };
};


export default App;
