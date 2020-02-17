import styled from 'styled-components';
import { themes } from "../../theme/theme"

const Container = styled.div`
  padding: 15rem 20% 5rem;
  background: ${ themes.colors.colorWhite};
  @media ${ themes.device.laptopL} {
    padding: 15rem 25% 5rem;
  }
  @media ${ themes.device.laptopS} {
    padding: 15rem 20% 5rem;
  }
  @media ${ themes.device.laptop} {
    flex-direction: column;
    padding: 10rem 10% 3rem;
  }

  @media ${ themes.device.tabletS} {
    padding: 10rem 5% 3rem;
  }

  .title {
    color: #343434;
    text-transform: uppercase;

    font-weight: bold;
    font-size: 6.4rem;
    line-height: 132.5%;
    margin-bottom: 3rem;

    @media ${ themes.device.laptopL} {
      font-size: 3.2rem;
    }
    @media ${ themes.device.tabletS} {
      margin-bottom: 2.5rem;
      font-size: 3.8rem;
    }
    @media ${ themes.device.mobileM} {
      margin-bottom: 2rem;
    }
  }

  .dateTime {
    font-size: 1.7rem;
    line-height: 171.7%;
    font-weight: 300;
    margin-bottom: 3rem;
    color: ${ themes.colors.colorGray5};

    @media ${ themes.device.laptopL} {
      font-size: 1.4rem;
    }

    @media ${ themes.device.mobileM} {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }

  .image {
    width: 100%;
    margin: 3rem 0;
  }

  .paragraph,
  .cursive,
  .boldCursive,
  .bold,
  .underline {
    font-weight: 300;
    font-size: 1.7rem;
    line-height: 171.7%;
    white-space: pre-line;
    margin: 1.5rem 0;
    color: #4e4e4e;
    @media ${ themes.device.mobileM} {
      font-size: 1.4rem;
    }
  }
  .underline {
    text-decoration: underline;
  }
  .h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 4.8rem;
    margin-bottom: 2rem;

    line-height: 132.5%;
    color: #343434;

    @media ${ themes.device.laptopL} {
      font-size: 3.2rem;
    }
  }
  .h2,
  .h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 132.5%;
    color: #343434;

    @media ${ themes.device.tabletS} {
      font-size: 2.4rem;
    }
  }
  .h3 {
    font-size: 2.4rem;

    @media ${ themes.device.tabletS} {
      font-size: 2rem;
    }
  }

  .borderStart {
    background: #f8f8f8;
    padding: 2rem;
    border-left: 2px solid #1b85e5;
  }
  .cursive {
    font-style: italic;
    color: #4e4e4e;
    background: #f8f8f8;
    padding: 2rem;
    border-left: 2px solid #1b85e5;
  }
  .boldCursive {
    font-weight: bold;
    font-style: italic;
  }
  .bold {
    font-weight: bold;
  }
`;

const Back = styled.a`
  font-weight: 300;
  font-size: 1.7rem;
  text-decoration: underline;
  margin: 1.5rem 0;
  color: ${ themes.colors.colorGray};
  :hover {
    color: ${ themes.colors.colorGray4};
  }
  @media ${ themes.device.tablet} {
    display: flex;
    margin-top: 10rem;
  }
  @media (max-width: 400px) {
    margin-top: 7rem;
  }
  @media ${ themes.device.mobileM} {
    font-size: 1.4rem;
  }
`;
const ImageLink = styled.a`
  background: ${ themes.colors.colorGray7};

  width: 6rem;
  height: 6rem;
  margin: 0 0.5rem;
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }
  :hover {
    background: ${ themes.colors.colorGray3};
  }
  @media ${ themes.device.tablet} {
    float: left;
  }
  @media (max-width: 470px) {
    margin: 0 0.5rem;
  }

  @media (max-width: 385px) {
    width: 4rem;
    height: 4rem;
  }
`;
const BorderShared = styled.div`
  padding: 2rem;

  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 20rem;
`;
export { Container, Back, ImageLink, BorderShared };
