import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Portal } from "react-portal";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogComponent from "../../components/Blog";
import CookieComponent from "../../components/CookieComponent";
import PreloaderComponent from "../../components/Preloader";

import config from "../../utils/config.json";

import {
  Container,
  ImageLink,
  BorderShared
} from "../../components/Article/styles";
import Layout from "../../components/Layout";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const twitter = "../../static/shareSvg/Twitter.svg";
const facebook = "../../static/shareSvg/Facebook.svg";
const mailto = "../../static/shareSvg/Mailto.svg";
const telegram = "../../static/shareSvg/Telegram.svg";
const whatsapp = "../../static/shareSvg/WhatsApp.png";

// Instantiate the app client
const client = createClient({
  space: config.space,
  accessToken: config.accessToken
});

const App = props => {
  const [scrollToTop, setscrollToTop] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [cookie, setCookie] = useState(true);

  const [dangerousHtml, setDangerousHtml] = useState("");
  const [currentArray, setCurrentArray] = useState([]);
  const [currentLink, setCurrentLink] = useState("");
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

    window.screen.width <= 1024
      ? setCurrentArray(imageSrc)
      : setCurrentArray(imageSrc.slice(0, 4));

    setCurrentLink(window.location.href);

    setDangerousHtml(documentToHtmlString(props.entries1.bodyArticle));
  }, []);

  const setSessionStorage = () => {
    localStorage.setItem("cookies", "true");
    setCookie(false);
  };
  const imageSrc = [
    {
      image: twitter,
      link: "https://twitter.com/intent/tweet?text=",
      color: "#2A85B8"
    },

    {
      image: facebook,
      color: "#2251C9",
      link: `https://www.facebook.com/dialog/send?app_id=1390387391030778&display=popup&redirect_uri=${currentLink}&link=`
    },
    {
      image: mailto,
      color: "#2E8420",
      link: "mailto:test@example.com?subject="
    },
    {
      image: telegram,
      color: "#2A85B8",
      link: "https://telegram.me/share/url?url="
    },
    {
      image: whatsapp,
      link: "https://api.whatsapp.com/send?text=",
      color: "#2E8420"
    }
  ];

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
            image={props.entries1.image}
            title={props.entries1.seoTitle}
            description={props.entries1.description}
          />

          <Header scrollToTop={scrollToTop} origin={origin} />
          <Container>
            <img className="image" src={props.entries1.image} />
            <div className="title">{props.entries1.title}</div>
            <div dangerouslySetInnerHTML={{ __html: dangerousHtml }} />

            <BorderShared>
              <div className="h3"> Share it in social media</div>
              <div style={{ display: "flex" }}>
                {currentArray.map((item, index) => (
                  <ImageLink
                    style={
                      index === 0
                        ? { marginLeft: 0, backgroundColor: item.color }
                        : { backgroundColor: item.color }
                    }
                    href={item.link + currentLink}
                    key={index}
                  >
                    <img src={item.image} alt="img" />
                  </ImageLink>
                ))}
              </div>
            </BorderShared>
          </Container>
          <BlogComponent
            turnOffPreloader={turnOffPreloader}
            articles={props.entries.items}
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
const convertPost = rawData => {
  const rawPost = rawData.fields;

  const rawdescription = rawPost.description || null;
  const rawtitle = rawPost.title || null;
  const rawseoTitle = rawPost.seoTitle || null;
  const rawimage = rawPost.image || null;
  var str = rawimage.fields.file.url;

  while (str.indexOf("/") == 0) {
    str = str.substring(1);
  }
  const image = "http://" + str;
  const rawbody = rawPost.body || null;

  return {
    description: rawdescription,
    title: rawtitle,
    bodyArticle: rawbody,
    seoTitle: rawseoTitle,
    image: image
  };
};

App.getInitialProps = async ({ query }) => {
  const entries1 = await client
    .getEntries({
      content_type: "blogPost",
      "fields.href": query.pid
    })
    .then(entries => {
      if (entries && entries.items && entries.items.length > 0) {
        const post = convertPost(entries.items[0]);
        return post;
      }
      return [];
    });
  const entries = await client.getEntries({
    content_type: "blogPost"
  });
  return { entries1, entries };
};
export default App;
