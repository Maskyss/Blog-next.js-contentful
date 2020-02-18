import React, { useState, useEffect } from "react";
import Link from "next/link";
import encodeUrl from 'encodeurl';

import {
  Container,
  Article,
  Image,
  Title,
  Subtitle,
  ArticlePrim
} from "./styles";

import {
  Blog,
  Title as Tit,
  Subtitle as Sub,
  Category,
  Date
} from "../Blog/styles";

const Articles = ({ articlesArr }) => {
  const [array, setArray] = useState([0]);
  const [mobile, setmobile] = useState(false);

  useEffect(() => {
    setmobile(window.screen.width < 769);
    const arr = [];
    let i = 0;
    const k = articlesArr.map((key, ind) => {
      if (ind === 0) {
        arr.push(0);
        i = 0;
      } else if (i < 2) {
        arr.push(1);
        i += 1;
      } else if (i > 2 && i < 5) {
        arr.push(0);
        i = 0;
      } else {
        arr.push(0);
        i += 1;
      }
    });
    setArray(arr);
    console.log(articlesArr);
  }, [articlesArr]);
  return (
    <Container>
      {articlesArr.map((key, i) => {
        const { href, image, title, subtitle, date, category } = key.fields;

        return mobile ? (
          i % 2 === 0 ? (
            <Link href={encodeUrl(`/${href}`)} key={i}>
              <Article>
                <>
                  <Image src={image.fields.file.url} />
                  <Title>{title}</Title>
                  <Subtitle>{subtitle}</Subtitle>
                </>
              </Article>
            </Link>
          ) : (
            <Link key={i} href={encodeUrl(`/${href}`)} >
              <ArticlePrim>
                <Blog>Blog</Blog>
                <Tit>{title}</Tit>
                <Sub className="subtitle">{subtitle}</Sub>
                <div style={{ display: "flex", margin: "auto 0 0" }}>
                  <Category className="subtitle">{category}</Category>
                  <Date className="subtitle">{date}</Date>
                </div>
              </ArticlePrim>
            </Link>
          )
        ) : array[i] === 0 ? (
          <Link href={encodeUrl(`/${href}`)} key={i}>
            <Article>
              <>
                <Image src={image.fields.file.url} />
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
              </>
            </Article>
          </Link>
        ) : (
          <Link key={i} href={encodeUrl(`/${href}`)} >
            <ArticlePrim>
              <Blog>Blog</Blog>
              <Tit>{title}</Tit>
              <Sub className="subtitle">{subtitle}</Sub>
              <div style={{ display: "flex", margin: "auto 0 0" }}>
                <Category className="subtitle">{category}</Category>
                <Date className="subtitle">{date}</Date>
              </div>
            </ArticlePrim>
          </Link>
        );
      })}
    </Container>
  );
};

export default Articles;
