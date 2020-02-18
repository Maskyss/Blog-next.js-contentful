import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Article,
  Image,
  BorderImage,
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
  }, []);
  return (
    <Container>
      {articlesArr.map((key, i) => {
        const { href, image, title, subtitle, date, category } = key;
        console.log(href, image, title, subtitle, date, category);
        // return mobile ? (
        //   i % 2 === 0 ? (
        //     <Article>
        //       <Link to={`/blog/${href}`}>
        //         <Image src={image} />
        //         <Title>{title}</Title>
        //         <Subtitle>{subtitle}</Subtitle>
        //       </Link>
        //     </Article>
        //   ) : (
        //     <ArticlePrim
        //       key={i}
        //       to={`/blog/${href}`}
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       <Blog>Blog</Blog>
        //       <Tit>{title}</Tit>
        //       <Sub className="subtitle">{subtitle}</Sub>
        //       <div style={{ display: 'flex', margin: 'auto 0 0' }}>
        //         <Category className="subtitle">{category}</Category>
        //         <Date className="subtitle">{date}</Date>
        //       </div>
        //     </ArticlePrim>
        //   )
        // ) : array[i] === 0 ? (
        //   <Article>
        //     <Link to={`/blog/${href}`}>
        //       <Image src={image} />
        //       <Title>{title}</Title>
        //       <Subtitle>{subtitle}</Subtitle>
        //     </Link>
        //   </Article>
        // ) : (
        //   <ArticlePrim
        //     key={i}
        //     to={`/blog/${href}`}
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     <Blog>Blog</Blog>
        //     <Tit>{title}</Tit>
        //     <Sub className="subtitle">{subtitle}</Sub>
        //     <div style={{ display: 'flex', margin: 'auto 0 0' }}>
        //       <Category className="subtitle">{category}</Category>
        //       <Date className="subtitle">{date}</Date>
        //     </div>
        //   </ArticlePrim>
        // );
      })}
    </Container>
  );
};

export default Articles;
