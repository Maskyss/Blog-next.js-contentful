import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import Head from "next/head";
import { Portal } from "react-portal";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogComponent from "../../components/Blog";
import CookieComponent from "../../components/CookieComponent";
import PreloaderComponent from "../../components/Preloader";

import config from "../../utils/config.json";
import { useRouter } from "next/router";
const ogImg = "../static/4.jpg";

import {
  Container,
  ImageLink,
  BorderShared
} from "../../components/Article/styles";
import Layout from "../../components/Layout";

import options from "../../utils/contentful";
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
  const router = useRouter();
  const { pid } = router.query;

  const [scrollToTop, setscrollToTop] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [cookie, setCookie] = useState(true);

  const [dangerousHtml, setDangerousHtml] = useState("");
  const [currentArray, setCurrentArray] = useState([]);
  const [currentLink, setCurrentLink] = useState("");
  const [origin, setOrigin] = useState("");
  const [hrefLoad, sethrefLoad] = useState("");
  const [image, setimage] = useState("");

  const [seoTitle, setseoTitle] = useState("");
  const [title, settitle] = useState("");
  const [url, seturl] = useState("");

  const [description, setdescription] = useState("");

  useEffect(() => {

    seturl(window.location.href);

    if (localStorage.getItem("cookies") !== null) {
      setCookie(false);
    }
    const articles = props.entries.items;

    const href = pid;
    sethrefLoad(pid);
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

    const {
      body: bodyArticle,
      seoTitle,
      title,
      description,
      image
    } = articles.filter(key => {
      return key.fields.href === href;
    })[0].fields;

    setdescription(description);
    setseoTitle(seoTitle);
    settitle(title);

    var str = image.fields.file.url;
    while (str.indexOf("/") == 0) {
      str = str.substring(1);
    }
    setimage("http://" + str);

    setDangerousHtml(documentToHtmlString(bodyArticle));
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
          {/* <Seo image={image} title={seoTitle} description={description} url={url} /> */}
          <Head>
            <title>{seoTitle}</title>
            <meta name="description" content={description} />
            <meta name="og:image" content={ogImg} />
          </Head>
          <Header scrollToTop={scrollToTop} origin={origin} />
          <Container>
            <img className="image" src={image} />
            <div className="title">{title}</div>
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

App.getInitialProps = async ({ req }) => {
 

  const entries = await 
    client.getEntries({
    content_type: "blogPost"
  });
 
  
  
  // console.log(item.fields.seoTitle, ,'entries1')
  // :image.fields.url
  // Inject in props of our screen component
  return { entries };
};
export default App;
