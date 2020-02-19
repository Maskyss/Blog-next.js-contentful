import React from "react";
import Head from 'next/head';
const favicon = "../../static/logoMini.png";

function Seo({ description, title, image, url = "" }) {

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <link rel="icon" sizes="192x192" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />
      <link rel="mask-icon" href={favicon} color="#49B882" />
      <link rel="icon" href={favicon} />
      <meta name="fb:app_id" content="1390387391030778" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />{" "}
      <meta property="og:locale" content="en_US" />
      <meta property="og:description" content={description} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
}



export default Seo;
