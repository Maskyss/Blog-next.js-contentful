import React from "react";

import {
  WithMedia,
  LinksMedia,
  LinkMedia,
  Copyright,
  PrivacyPolicy
} from "./styles";

const i0 = "../../static/media/0.svg";
const i1 = "../../static/media/1.svg";
const i2 = "../../static/media/2.svg";
const i3 = "../../static/media/3.svg";
const i4 = "../../static/media/4.svg";

const Media = () => {
  const links = [
    {
      link: "https://www.facebook.com/fulcrum.rocks",
      img: i0
    },
    {
      link: "https://www.linkedin.com/company/fulcrum-product/",
      img: i1
    },
    {
      link: "https://medium.com/@FulcrumBlog",
      img: i2
    },
    {
      link: "https://www.instagram.com/fulcrumrocks/",
      img: i3
    },
    {
      link: "https://www.behance.net/Fulcrumrocks",
      img: i4
    }
  ];

  return (
    <WithMedia>
      <LinksMedia>
        {links.map((key, i) => (
          <LinkMedia
            href={key.link}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img key={i} src={key.img} alt="media" />
          </LinkMedia>
        ))}
      </LinksMedia>
      <Copyright>{`©Copyright ${new Date().getFullYear()} Fulcrum – Full-stack mobile (iOS, Android) and web app design and development company. All Rights Reserved `}</Copyright>
      <PrivacyPolicy href="/privacy-policy/index.html">
        Privacy Policy
      </PrivacyPolicy>
    </WithMedia>
  );
};
export default Media;
