import styled from 'styled-components';
import { Button } from '../../theme/mainStyles';
import { themes } from "../../theme/theme"

const AnimationDiv = styled.div`
  position: relative;
  transform: scale(1);
  z-index: 9999999999999;
  height: 100vh;
  svg {
    path {
      fill: #0e0e0e;
    }
  }
`;

const AnimationBlock = styled.div`
  width: 100%;
  position: relative;
  height: 0;
`;
const Container = styled.div`
  display: none;
  width: 100%;
  height: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 56;
  background: ${ themes.colors.mainColor};
  overflow: hidden;

  transition: opacity 0.1s, height 1s;
`;

const LinkHeader = styled.a`
  align-self: center;
  margin-top: 5px;

  font-style: normal;
  font-weight: bold;
  font-size: 2.8rem;
  line-height: 132.5%;
  text-align: center;
  width: max-content;
  color: ${ themes.colors.colorWhite};
  :after {
    content: '';
    width: 0px;
    margin-top: 5px;

    height: 1px;
    display: block;

    background: ${ themes.colors.colorWhite};
    transition: 300ms;
  }
  :hover:after {
    width: 100%;
  }

  @media ${ themes.device.mobileL} {
    font-size: 2.4rem;
  }
  @media (max-height: 390px) {
    font-size: 2.4rem;
  }
`;

const LinksHeader = styled.div`
  font-size: 3.2rem;
  margin-top: 10rem;
  height: 55rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  justify-content: space-around;
  justify-content: space-evenly;
  font-weight: 600;
  z-index: 10;
  position: relative;
  @media (max-height: 630px) {
    height: 45rem;
  }
  @media (max-height: 520px) {
    height: 35rem;
  }
  @media (max-height: 430px) {
    height: 30rem;
  }
  @media (max-height: 390px) {
    height: auto;
  }
`;

const ButtonEstimate = styled(Button)`
  height: 5.5rem;
  width: 16rem;


}
`;
export {
  Container,
  ButtonEstimate,
  LinkHeader,
  LinksHeader,
  AnimationBlock,
  AnimationDiv,
};
