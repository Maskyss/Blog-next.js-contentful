import React, {  useEffect, useState } from 'react';
import Link from "next/link";
import encodeUrl from 'encodeurl';

import {
  Container,
  Header,
  MainTitle,
  Articles,
  Article,
  Blog,
  Title,
  Subtitle,
  Category,
  Date,
} from './styles';

const BlogComponent = ({ turnOffPreloader ,articles}) => {
  const [articlesToShow, setArticlesToShow] = useState(3);
  const [selectedArticles, setSelectedArticles]= useState([])

  const sizeAndCount = {
    768: 3,
    1448: 2,
    10000: 3,
  };

  useEffect(() => {
    const windowScreenCount = Object.entries(sizeAndCount).filter(
      item => item[0] >= window.screen.width,
    )[0][1];
    const href=window.location.pathname.replace(`/`,'')

      const obj = articles.filter(key => {
          return key.fields.href !== href;
        });
    setSelectedArticles(obj.reverse());

    setArticlesToShow(windowScreenCount);

    turnOffPreloader();
  }, []);

  return (
    <Container id="blog">
      {/* <Fade> */}
        <Header>
          <MainTitle>Blog</MainTitle>
        </Header>
        <Articles>
          {selectedArticles.slice(0, 3).map((key, i) => (
            <Link key={i} href={encodeUrl(`/${key.fields.href}`)} >

            <Article
              style={articlesToShow === 2 && i === 2 ? { display: 'none' } : {}}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Blog>Blog</Blog>
              <Title>{key.fields.title}</Title>
              <Subtitle className="subtitle">{key.fields.subtitle}</Subtitle>
              <div style={{ display: 'flex', margin: 'auto 0 0' }}>
                <Category className="subtitle">{key.fields.category}</Category>
                <Date className="subtitle">{key.fields.date}</Date>
              </div>
            </Article>
            </Link>
          ))}
        </Articles>
      {/* </Fade> */}
    </Container>
  );
};

export default BlogComponent;
