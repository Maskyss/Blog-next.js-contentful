import styled from 'styled-components';
import { BigTitle } from '../../theme/mainStyles';
import { themes } from "../../theme/theme"

const Container = styled.div`
  width: 100%;
  padding: 5rem 10%;
  background: ${themes.colors.mainColor};
  position: relative;
  z-index: 5;

  @media ${themes.device.laptopL} {
    padding: 5rem 15%;
  }
  @media ${themes.device.laptopS} {
    padding: 5rem 10%;
  }

  @media ${themes.device.tabletS} {
    padding: 3rem 5%;
    padding-bottom: 5rem;
  }
`;
const Header = styled.div`
  display: flex;
  height: 15rem;
  align-items: center;
  justify-content: space-between;
  @media ${themes.device.laptopL} {
    height: 10rem;
  }
  @media ${themes.device.tabletS} {
    margin-bottom: 0rem;
  }
`;

const MainTitle = styled(BigTitle)``;

const ButtonAll = styled.div`
  height: 7rem;
  width: 19rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 171.7%;
  ${themes.colors.colorBlue1};
  background: ${themes.colors.colorGray1};
  :hover {
    color: ${themes.colors.colorWhite};
    background: ${themes.colors.colorBlue1};
  }

  @media ${themes.device.laptopL} {
    font-size: 1.4rem;
    height: 5.5rem;
    width: 16rem;
  }
  @media ${themes.device.mobileM} {
    width: 13.3rem;
  }
`;
const Articles = styled.div`
  display: flex;
  flex-direction: row;
  @media ${themes.device.tablet} {
    flex-wrap: nowrap;
    overflow: hidden;
    width: max-content;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: ${themes.colors.colorWhite};
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  height: 50rem;
  width: 32%;
  margin-right: 2rem;
  background: ${themes.colors.colorGray1};

  :hover {
    background: ${themes.colors.colorBlue1};
    .subtitle {
      color: ${themes.colors.colorWhite};
    }
  }
  @media ${themes.device.laptopL} {
    width: 48%;
    height: 47rem;
    padding: 3rem;
  }
  @media ${themes.device.tablet} {
    min-width: 40rem;
    margin-right: 1rem;
    margin-bottom: 2rem;

    height: 40rem;
  }
  @media (max-width: 450px) {
    min-width: 100%;
  }
`;
const Blog = styled.div`
  font-weight: 600;
  font-size: 2rem;
  line-height: 132.5%;
  color: ${themes.colors.colorWhite};
  margin-bottom: 5rem;
  @media (max-width: 1110px) {
    margin-bottom: 10%;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 132.5%;
  margin-bottom: 2.5rem;
  color: ${themes.colors.colorWhite};

  @media (max-width: 1110px) {
    margin-bottom: 0;
  }

  @media ${themes.device.mobileM} {
    font-size: 2rem;
  }
`;
const Subtitle = styled.div`
  font-weight: 300;
  font-size: 1.7rem;
  line-height: 2.6rem;
  color: ${themes.colors.colorGray5};

  margin: auto 0 20%;
  @media (max-width: 1110px) {
    margin: auto 0;
  }
  @media ${themes.device.mobileM} {
    font-size: 1.4rem;
  }
`;
const Category = styled.div`
  font-weight: 300;
  font-size: 1.7rem;
  line-height: 2.6rem;
  width: 50%;
  color: ${themes.colors.colorGray5};

  @media ${themes.device.mobileM} {
    font-size: 1.4rem;
  }
`;
const Date = styled.div`
  font-weight: 300;
  font-size: 1.7rem;
  line-height: 2.6rem;
  width: 50%;
  text-align: right;
  color: ${themes.colors.colorGray5};

  @media (max-width: 1110px) {
    width: 70%;
  }
  @media ${themes.device.mobileM} {
    font-size: 1.4rem;
  }
`;
export {
  Container,
  Header,
  MainTitle,
  ButtonAll,
  Articles,
  Article,
  Blog,
  Title,
  Subtitle,
  Category,
  Date,
};
