import React, { useEffect, useState } from "react";

import {
  Container,
  ImageLink,
  BorderShared,Border
} from "../../components/Article/styles";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import options from "../../utils/contentful";

const twitter = "../../static/shareSvg/Twitter.svg";
const facebook = "../../static/shareSvg/Facebook.svg";
const mailto = "../../static/shareSvg/Mailto.svg";
const telegram = "../../static/shareSvg/Telegram.svg";
const whatsapp = "../../static/shareSvg/WhatsApp.png";

const Article = ({ entriesPost }) => {
  const [dangerousHtml, setDangerousHtml] = useState("");
  const [currentArray, setCurrentArray] = useState([]);
  const [currentLink, setCurrentLink] = useState("");

  useEffect(() => {
    window.screen.width <= 1024
      ? setCurrentArray(imageSrc)
      : setCurrentArray(imageSrc.slice(0, 4));

    setCurrentLink(window.location.href);

    setDangerousHtml(documentToHtmlString(entriesPost.bodyArticle,options));
  }, []);

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

  return (
    <Container>
      <div className="dangerously">
        <div className="title">{entriesPost.title}</div>

        <div className="borderMain">
          <img className="imageMain" src={entriesPost.image} />
        </div>
        <p className='dateTime'>{entriesPost.timeToRead}</p>
        <div className="sales">
          <img src={entriesPost.photoAuthor} className="photo" alt="Olekii" />
          <div>
            <div className="name">{entriesPost.nameAuthor}</div>
            <div className="position">{entriesPost.positionAuthor}</div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: dangerousHtml }} />
        <BorderShared>
          <div className="h3"> Share it in social media</div>
          <Border>
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
          </Border>
        </BorderShared>
      </div>
    </Container>
  );
};

export default Article;
