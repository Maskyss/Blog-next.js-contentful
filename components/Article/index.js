import React, { useEffect, useState } from 'react';
import { Portal } from 'react-portal';
import Seo from '../Seo';
import Header from '../Header';
import Footer from '../Footer';
import BlogComponent from '../Blog';
import CookieComponent from '../components/CookieComponent';
import config from "../../utils/config.json";

import { Container, ImageLink, BorderShared } from './styles';

const twitter = '../../static/shareSvg/Twitter.svg';
const facebook = '../../static/shareSvg/Facebook.svg';
const mailto = '../../static/shareSvg/Mailto.svg';
const telegram = '../../static/shareSvg/Telegram.svg';
const whatsapp = '../../static/shareSvg/WhatsApp.png';

// Instantiate the app client
const client = createClient({
  space: config.space,
  accessToken: config.accessToken
});

const Article = props => {
  const [scrollToTop, setscrollToTop] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [cookie, setCookie] = useState(true);

  const [dangerousHtml, setDangerousHtml] = useState('');
  const [currentArray, setCurrentArray] = useState([]);
  const [currentLink, setCurrentLink] = useState('');
  const [origin, setOrigin] = useState('');
  const [hrefLoad, sethrefLoad] = useState('');
  const [image, setimage] = useState('');

  const [seoTitle, setseoTitle] = useState('');
  const [description, setdescription] = useState('');

  useEffect(() => {
    if (localStorage.getItem('cookies') !== null) {
      setCookie(false);
    }
    const { articles } = props.data.allContent.edges[0].node;

    const href = props.pageContext.articleId;
    sethrefLoad(href);
    const { body } = document;
    setOrigin(window.location.origin);

    body.setAttribute('style', 'overflow-y:hidden');
    window.addEventListener('scroll', _onScroll);

    setTimeout(() => {
      turnOffPreloader();
    }, 500);

    window.screen.width <= 1024
      ? setCurrentArray(imageSrc)
      : setCurrentArray(imageSrc.slice(0, 4));

    setCurrentLink(window.location.href);

    const { value, seoTitle, description, image } = articles.filter(key => {
      return key.href === href;
    })[0];

    setdescription(description);
    setseoTitle(seoTitle);
    setimage(image);
    const obj = Object.entries(JSON.parse(value)).map(key => {
      const newKey = key[0].toString().replace(/(-[0-9]*)/, '');

      switch (newKey) {
        case 'title':
          return `<div class='title'>${key[1]}</div>`;

        case 'dateTime':
          return `<div class='dateTime'>${key[1]}</div>`;
        case 'h1':
          return `<div class='h1'>${key[1]}</div>`;

        case 'h2':
          return `<div class='h2'>${key[1]}</div>`;
        case 'paragraph':
          return `<div class='paragraph'>${key[1]}</div>`;
        case 'url':
          const str = key[1].split('||', 2);
          console.log(str);
          return `<a class='underline' href=${str[1]}>${str[0]}</a>`;
        case 'img':
          return `<img class='image' src=${key[1]} ></img>`;
        case 'cursive':
          return `<div class='cursive'>${key[1]}</div>`;
        case 'bolCurs':
          return `<div class='boldCursive'>${key[1]}</div>`;
        case 'bold':
          return `<div class='bold'>${key[1]}</div>`;
        case 'boldSpan':
          return `<span class='bold'>${key[1]} </span>`;
        case 'borderStart':
          return `<div class='borderStart'>${key[1]}`;
        case 'borderEnd':
          return `</div>`;
        default:
          return `<div>${key[1]}</div>`;
      }
    });
    setDangerousHtml(obj.toString().replace(/,</g, '<'));
  }, []);
  const setSessionStorage = () => {
    localStorage.setItem('cookies', 'true');
    setCookie(false);
  };
  const imageSrc = [
    {
      image: twitter,
      link: 'https://twitter.com/intent/tweet?text=',
      color: '#2A85B8',
    },

    {
      image: facebook,
      color: '#2251C9',
      link: `https://www.facebook.com/dialog/send?app_id=1390387391030778&display=popup&redirect_uri=${currentLink}&link=`,
    },
    {
      image: mailto,
      color: '#2E8420',
      link: 'mailto:test@example.com?subject=',
    },
    {
      image: telegram,
      color: '#2A85B8',
      link: 'https://telegram.me/share/url?url=',
    },
    {
      image: whatsapp,
      link: 'https://api.whatsapp.com/send?text=',
      color: '#2E8420',
    },
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
      body.setAttribute('style', 'overflow-y:auto');
    }, 1000);
  };
  return (
    <>
      {preloader && (
        <Portal>
          <PreloaderComponent />
        </Portal>
      )}
        <div style={preloader ? { opacity: 0 } : {}}>
          <Seo image={image} title={seoTitle} description={description} />

          <Header scrollToTop={scrollToTop} origin={origin} />
          <Container>
            <div dangerouslySetInnerHTML={{ __html: dangerousHtml }} />
            <BorderShared>
              <div className="h3"> Share it in social media</div>
              <div style={{ display: 'flex' }}>
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
          <BlogComponent turnOffPreloader={turnOffPreloader} />

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
    </>
  );
};
Article.getInitialProps = async () => {
  const entries = await client.getEntries({
    content_type: "blogPost"
  });

  // Inject in props of our screen component
  return { entries };
};
export default Article;
