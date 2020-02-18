import styled from 'styled-components';
import { Paragraph, BigTitle, Button } from '../../theme/mainStyles';
import { themes } from "../../theme/theme"

const LinkImage = styled.a`
  width: 17.2rem;
  align-self: center;
  display: flex;
  margin: 10rem auto;
  position: relative;
  z-index: 10;
  background: ${themes.colors.mainColor};
  @media ${themes.device.laptopL} {
    margin: 5rem auto;
  }
  img {
    width: 100%;
  }
  @media (max-height: 650px) {
    margin: 3rem auto;
  }
  @media (max-height: 370px) {
    margin: 1.5rem auto;
  }
`;

const AnimationDiv = styled.div`
  position: relative;
  transform: scale(0.4);
  top: -50rem;
  @media (max-width: 2350px) {
    top: -45rem;
  }
  @media (max-width: 2050px) {
    top: -50rem;
  }
  @media ${themes.device.desktop} {
    transform: scale(0.5);
    top: -48rem;
  }

  @media ${themes.device.laptopL} {
    transform: scale(0.4);
    top: -40rem;
  }

  @media ${themes.device.laptop} {
    top: -35rem;
  }
  @media (max-width: 910px) {
    top: -25rem;
    transform: scale(0.6);
  }
  @media (max-width: 760px) {
    top: -25rem;
  }
  @media (max-width: 640px) {
    top: -20rem;
  }

  @media ${themes.device.tabletS} {
    top: -15rem;
  }
  @media (max-width: 470px) {
    transform: scale(0.8);
    top: -12rem;
  }
  @media ${themes.device.mobileM} {
    top: -9rem;
  }
`;
const AnimationContainer = styled.div`
  width: 120rem;
  position: relative;
  height: 35rem;
  left: 2rem;
  margin: auto;
  @media (max-width: 2050px) {
    height: 30rem;
  }
  @media ${themes.device.laptopL} {
    width: 100rem;
    height: 26rem;
  }
  @media ${themes.device.laptop} {
    width: 90rem;
  }
  @media (max-width: 910px) {
    width: 75rem;
  }
  @media (max-width: 760px) {
    width: 100%;
  }

  @media ${themes.device.tablet} {
    height: 24rem;
    left: 1rem;
  }
  @media ${themes.device.mobileL} {
    height: 22rem;
  }
  @media ${themes.device.mobileM} {
    height: 18rem;
  }
  @media (max-height: 650px) {
    width: 90%;
    height: 19rem;
  }
  @media (max-height: 500px) {
    width: 70%;
    top: 4rem;

    height: 14rem;
  }
  @media (max-height: 370px) {
    top: 7rem;
    width: 60%;
    height: 13rem;
  }
`;
const Title = styled(BigTitle)`
  text-align: center;
  font-size: 4.8rem;
  margin: 2rem 0;
  position: relative;
  z-index: 10;
  @media ${themes.device.tabletS} {
    margin: 1rem 20%;
    font-size: 2.4rem;
  }

  @media (max-height: 400px) {
    font-size: 2rem;
    margin: 0.5rem 20%;
  }
`;
const Subtitle = styled(Paragraph)`
  text-align: center;
  position: relative;
  z-index: 10;
  @media (max-height: 370px) {
    font-size: 1.4rem;
  }
`;
const ButtonBack = styled(Button)`
  margin: auto;

  height: 7rem;
  width: 19rem;
  position: relative;
  z-index: 10;
  margin-top: 3rem;

  @media ${themes.device.laptopL} {
    height: 5.5rem;
    width: 16rem;
  }
  @media (max-height: 650px) {
    margin-top: 1rem;

    height: 5rem;
  }
  @media (max-height: 370px) {
    height: 4rem;
    width: 14rem;
  }
`;
export {
  LinkImage,
  AnimationDiv,
  AnimationContainer,
  Title,
  Subtitle,
  ButtonBack,
};
