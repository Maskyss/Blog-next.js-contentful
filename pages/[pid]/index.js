import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Portal } from "react-portal";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogComponent from "../../components/Blog";
import CookieComponent from "../../components/CookieComponent";
import PreloaderComponent from "../../components/Preloader";

import { convertPost } from "../../utils/functions";
import config from "../../utils/config.json";
import Layout from "../../components/Layout";

import Article from "../../components/Article";



const client = createClient({
  space: config.space,
  accessToken: config.accessToken
});

const App = ({entriesPost, entriesArr}) => {
  const [scrollToTop, setscrollToTop] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [cookie, setCookie] = useState(true);

  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (localStorage.getItem("cookies") !== null) {
      setCookie(false);
    }

    const { body } = document;
    setOrigin(window.location.origin);

    body.setAttribute("style", "overflow-y:hidden");
    window.addEventListener("scroll", _onScroll);

    setTimeout(() => {
      turnOffPreloader();
    }, 500);

  }, []);

  const setSessionStorage = () => {
    localStorage.setItem("cookies", "true");
    setCookie(false);
  };
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
    }, 1500);
  };
  

  return (
    <>
      <div>
        <Layout />
        <div style={preloader ? { opacity: 0 } : {}}>
          <Seo
            image={entriesPost.image}
            title={entriesPost.seoTitle}
            description={entriesPost.description}
          />

          <Header scrollToTop={scrollToTop} origin={origin} />
          <Article entriesPost={entriesPost}/>
          
          <BlogComponent
            turnOffPreloader={turnOffPreloader}
            articles={entriesArr}
          />
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
      {preloader && (
        <Portal>
          <PreloaderComponent />
        </Portal>
      )}
    </>
  );
};

App.getInitialProps = async ({ query }) => {
  const entriesPost = await client
    .getEntries({
      content_type: "blogPost",
      // "fields.href": query.pid
    })
    .then(entries => {
      if (entries && entries.items && entries.items.length > 0) {
        const post = convertPost(entries.items[0]);
        return post;
      }
      return [];
    });

  const entriesArr = await client
    .getEntries({
      content_type: "blogPost"
    })
    .then(entries => {
      if (entries && entries.items && entries.items.length > 0) {
        const blogPosts = entries.items.map(entry => convertPost(entry));
        return blogPosts;
      }
      return [];
    });
  return { entriesPost, entriesArr };
};
export default App;
