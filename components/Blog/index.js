import React, { useContext, useEffect, useState } from 'react';
// import Fade from 'react-reveal/Fade';

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

const BlogComponent = ({ turnOffPreloader }) => {
  const [articlesToShow, setArticlesToShow] = useState(3);
  const [selectedArticles, setSelectedArticles]= useState([])
  const { articles } = useContext(DataContext);

  const sizeAndCount = {
    768: 3,
    1448: 2,
    10000: 3,
  };

  useEffect(() => {
    const windowScreenCount = Object.entries(sizeAndCount).filter(
      item => item[0] >= window.screen.width,
    )[0][1];
    const href=window.location.pathname.replace(`/blog/`,'')

      const obj = articles.filter(key => {
          return key.href !== href;
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
            <Article
              key={i}
              to={`/blog/${key.href}`}
              style={articlesToShow === 2 && i === 2 ? { display: 'none' } : {}}
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
          ))}
        </Articles>
      {/* </Fade> */}
    </Container>
  );
};

export default BlogComponent;
