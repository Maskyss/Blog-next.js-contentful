import styled from "styled-components";
import { themes } from "../../theme/theme";

const Container = styled.div`
  padding: 15rem 15% 5rem;
  background: ${themes.colors.mainColor};
  font-family: 'Raleway', sans-serif;
  @media ${themes.device.laptop} {
    flex-direction: column;
    padding: 10rem 10% 3rem;
  }

  @media ${themes.device.tabletS} {
    padding: 10rem 0 3rem;
  }
  .dangerously {
    background: ${themes.colors.colorWhite};
    padding: 0 8%;
    font-family: 'Raleway', sans-serif;
  }
  .title {
    color: white;
    background: ${themes.colors.mainColor};
    font-family: 'Raleway', sans-serif;

    text-transform: uppercase;
    width: 120%;
    position: relative;
    transform: translate(-50%, 0%);
    left: 50%;
    font-weight: bold;
    font-size: 6.4rem;
    line-height: 132.5%;
    padding: 4rem 7rem;
    @media ${themes.device.laptopL} {
      font-size: 3.2rem;
    }
    @media ${themes.device.tabletS} {
      padding: 2rem;

      font-size: 3.8rem;
    }
    @media ${themes.device.mobileM} {
      font-size: 2.8rem;
    }
  }

  .dateTime {
    font-size: 1.8rem;
    line-height: 171.7%;
    font-weight: 300;
    font-family: 'Raleway', sans-serif;

    color: ${themes.colors.colorGray5};

    @media ${themes.device.laptopL} {
      font-size: 1.4rem;
    }

    @media ${themes.device.mobileM} {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
  }
  .borderMain {
    width: 119.3%;
    position: relative;
    transform: translate(-50%, 0%);
    left: 50%;
    margin-bottom: 2rem;
    background-color: #0e0e0e;
  }
  .imageMain {
    width: 100%;
    margin: -0.2rem 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .image {
    width: 100%;
  }
  .paragraph,
  .cursive,
  .boldCursive,
  .bold,
  .underline, a {
    font-family: 'Raleway', sans-serif;

    font-weight: 300;
    font-size: 1.8rem;
    line-height: 171.7%;
    white-space: pre-line;
    margin: 1.5rem 0;
    color: #4e4e4e;
    @media ${themes.device.mobileM} {
      font-size: 1.4rem;
    }
  }
  ul, ol{
    padding: 0 4rem;
    @media ${themes.device.tabletS} {
      padding: 0 2rem;

    }
    li {
      font-size: 23px;
    }
  }
    ol{
      li {
        font-size: 17px;
      }
    }

    .h1 {
      font-family: 'Raleway', sans-serif;
  
      font-style: normal;
      font-weight: bold;
      font-size: 4.8rem;
      margin-bottom: 2rem;
  
      line-height: 132.5%;
    color: #343434;

    @media ${themes.device.laptopL} {
      font-size: 3.2rem;
    }
    @media ${themes.device.mobileM} {
      font-size: 2.4rem;
    }
  }
  .h2,
  .h3 {
    font-family: 'Raleway', sans-serif;

    font-style: normal;
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 132.5%;
    color: #343434;

    @media ${themes.device.tabletS} {
      font-size: 2.4rem;
    }
    @media ${themes.device.mobileM} {
      font-size: 2rem;
    }
  }

  .h3 {
    font-size: 2.4rem;
    font-family: 'Raleway', sans-serif;

      font-style: normal;
      font-weight: bold;
    @media ${themes.device.tabletS} {
      font-size: 2rem;
    }
  }
  a{
    padding: 0;

    text-decoration: underline;
  }
  // .borderStart {
  //   background: #f8f8f8;
  //   font-family: 'Raleway', sans-serif;

  //   padding: 2rem;
  //   border-left: 2px solid #1b85e5;
  // }



  code {
    font-family: 'Raleway', sans-serif;
    overflow: auto;
    background: #f8f8f8;
    position: relative;
padding:2rem;
    display: block;
    font-family: monospace;
    color: #4e4e4e;
    white-space: pre;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 171.7%;
  }
  // .cursive {
  //   font-style: italic;
  //   color: #4e4e4e;
  //   background: #f8f8f8;
  //   padding: 2rem;
  //   border-left: 2px solid #1b85e5;
  //   font-family: 'Raleway', sans-serif;
  // }
  // .boldCursive {
  //   font-weight: bold;
  //   font-style: italic;
  // }
  .bold {
    font-weight: bold;
  }
  // .button {
  //   width: 20rem;
  //   height: 6rem;
  //   margin: 2rem auto;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   background: ${themes.colors.colorBlue1};
  //   color: ${themes.colors.colorWhite};

  //   transition: background 0.5s;
  //   font-size: 1.8rem;
  //   font-weight: 600;

  //   :hover {
  //     background: ${themes.colors.colorBlue2};
  //   }
  //   @media ${themes.device.laptopL} {
  //     font-size: 1.4rem;
  //     height: 5.5rem;
  //   }
  // }
  .sales {
    display: flex;
    align-items: center;
    font-family: 'Raleway', sans-serif;

    
  }
  .photo {
    position: relative;
    margin-right: 4rem;
    width: 8.5rem;
    heigth: 8.5rem;

    @media ${themes.device.mobileL} {
      margin-right: 2rem;
    }
  }
  .name {
    margin-bottom: 1rem;
    font-size: 2.4rem;
    position: relative;
    font-family: 'Raleway', sans-serif;

    color: ${themes.colors.colorGray3};
    font-weight: 600;
    @media ${themes.device.mobileM} {
      font-size: 2rem;
    }
  }
  .position {
    position: relative;
    font-family: 'Raleway', sans-serif;

    font-size: 1.8rem;
    color: ${themes.colors.colorGray};
    font-weight: 300;
    @media ${themes.device.mobileM} {
      font-size: 1.4rem;
    }
  }
`;

const Back = styled.a`
  font-weight: 300;
  font-size: 1.8rem;
  text-decoration: underline;
  margin: 1.5rem 0;
  color: ${themes.colors.colorGray};
  :hover {
    color: ${themes.colors.colorGray4};
  }
  @media ${themes.device.tablet} {
    display: flex;
    margin-top: 10rem;
  }
  @media (max-width: 400px) {
    margin-top: 7rem;
  }
  @media ${themes.device.mobileM} {
    font-size: 1.4rem;
  }
`;
const ImageLink = styled.a`
  background: ${themes.colors.colorGray7};

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
    filter: brightness(0.85);
  }
  @media ${themes.device.tablet} {
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
const Border = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25rem;
  @media ${themes.device.laptop} {
    width: 31rem;

  }
  @media (max-width: 385px) {
    width: 25rem;

  }
`;
const BorderShared = styled.div`
  padding: 2rem;
  margin: auto;
  width: 84%;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 20rem;
  @media ${themes.device.tablet} {
    width: 100%;
  }
`;
export { Container, Back, ImageLink, BorderShared, Border };
