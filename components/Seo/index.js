import React from "react";
import { NextSeo } from "next-seo";


function Seo({ description, title, image }) {
  return (
    <NextSeo
      openGraph={{
        type: "article",
        title: title,
        description: description,
        images: [
          {
            url: image,
            width: 850,
            height: 650,
            alt: title
          }
        ]
      }}
      title={title}
      description={description}
    />
  );
}

export default Seo;
