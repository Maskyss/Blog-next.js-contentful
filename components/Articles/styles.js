import styled from 'styled-components';
import { Paragraph } from '../../theme/mainStyles';
import { Article as Art } from '../Blog/styles';
import { themes } from "../../theme/theme"

const Container = styled.div`
  margin: auto;
  padding: 15rem 10% 5rem;
  display: flex;
  flex-wrap: wrap;
  background: ${themes.colors.mainColor};
  @media ${themes.device.laptopL} {
    padding: 15rem 15% 5rem;
  }
  @media ${themes.device.laptopS} {
    padding: 10rem 10% 5rem;
  }
  @media ${themes.device.laptop} {
    // flex-direction: column;
    padding: 10rem 10% 3rem;
  }
  @media ${themes.device.tablet} {
    flex-direction: column;
    align-content: center;
  }
  @media ${themes.device.tabletS} {
    padding: 10rem 5% 3rem;
    width: 95%;
  }
`;

const Article = styled.div`
cursor:pointer;
  width: 60%;
  margin: 0 1%;
  margin-bottom: 5rem;
  
  @media ${themes.device.tablet} {
    min-width: 40rem;
  }
  @media (max-width: 430px) {
    width: 100%;
    min-width: 30rem;
  }
`;
const ArticlePrim = styled(Art)`
  margin: 0 1%;
  cursor:pointer;
  width: 30%;
  background: #1e1e1e;

  @media ${themes.device.laptopL} {
    width: 35%;
    height: 45rem;
  }
  @media ${themes.device.tablet} {
    min-width: 40rem;
    margin-bottom: 5rem;
    height: 40rem;
  }

  @media (max-width: 430px) {
    min-width: 30rem;

    width: 100%;
    margin-right: 0;
  }
  @media ${themes.device.mobileM} {
    height: 35rem;
  }
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media ${themes.device.tablet} {
    width: 100%;
  }
`;

const BorderImage = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: ${themes.colors.colorWhite};

  line-height: 132.5%;
  font-weight: bold;
  font-size: 3.8rem;
  margin: 2rem 0;
  c @media ${themes.device.laptopL} {
    font-size: 2.8rem;
  }

  @media ${themes.device.tablet} {
    font-size: 2.4rem;
  }
`;
const Subtitle = styled(Paragraph)`
  color: ${themes.colors.colorGray5};

  @media ${themes.device.mobileL} {
    font-size: 1.4rem;
  }
`;

export { Container, Article, Image, BorderImage, Title, Subtitle, ArticlePrim };
