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
    // console.log(articles)
    const href=window.location.pathname.replace(`/`,'')

      const obj = articles.filter(key => {
          return key.href !== href;
        });
    setSelectedArticles(obj.reverse());

    setArticlesToShow(windowScreenCount);

    turnOffPreloader();
  }, []);

  return (
    <Container id="blog">
        <Header>
          <MainTitle>Blog</MainTitle>
        </Header>
        <Articles>
          {selectedArticles.slice(0, 3).map((key, i) => (
            <Link key={i} href={encodeUrl(`/${key.href}`)} >

            <Article
              style={
                articlesToShow === 2 && i === 2
                ? { display: 'none' }
                : {
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.55) 100%, rgba(0,0,0,0.2) 50%), url(${key.image})`,
                  }  
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Blog>Blog</Blog>
              <Title>{key.title}</Title>
              <Subtitle className="subtitle">{key.subtitle}</Subtitle>
              <div style={{ display: 'flex', margin: 'auto 0 0' }}>
                <Category className="subtitle">{key.category}</Category>
                <Date className="subtitle">{key.date}</Date>
              </div>
            </Article>
            </Link>
          ))}
        </Articles>
    </Container>
  );
};

export default BlogComponent;
