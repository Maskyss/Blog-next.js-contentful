import styled from "styled-components";
import { themes } from "../../theme/theme";

const HeaderCustom = styled.header`
  display: flex;
  flex-direction: row;

  font-size: 1.5rem;
  font-weight: 300;
  position: fixed;
  background: ${themes.colors.mainColor};
  left: 0;
  top: 0;
  height: 10rem;
  padding: 2rem 10% 2rem 10%;
  width: 100%;

  transition: height 1s;

  z-index: 56;

  @media ${themes.device.laptopL} {
    padding: 2rem 15% 2rem 15%;
  }

  @media ${themes.device.laptopS} {
    justify-content: space-between;
    padding: 2rem 10% 2rem 10%;
  }
  @media ${themes.device.laptop} {
    padding: 1rem 10% 1rem 10%;
  }
  @media ${themes.device.tabletS} {
    padding: 1rem 5% 1rem 5%;
  }
`;

const LinkImage = styled.a`
  width: 17.2rem;
  align-self: center;
`;

const LinkHeader = styled.a`
  align-self: center;
  margin-top: 5px;
  color: ${themes.colors.colorGray};
  position: relative;
  z-index: 10;
  :after {
    content: "";
    width: 0px;
    margin-top: 5px;

    height: 1px;
    display: block;

    background: ${themes.colors.colorGray};
    transition: 300ms;
  }
  :hover:after {
    width: 100%;
  }
`;

const LinksHeader = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;

  justify-content: space-around;
  font-weight: 600;

  @media ${themes.device.laptop} {
    display: none;
  }
`;

const DivEstimate = styled.div`
  width: 40%;
  display: flex;
  align-self: center;
  justify-content: flex-end;
  position: relative;
  z-index: 10;
  transition: height 0.2s;
  @media ${themes.device.laptopL} {
    width: 30%;
  }
  @media ${themes.device.laptop} {
    display: none;
  }
`;

const ButtonEstimate = styled.a`
  background: ${themes.colors.colorBlue1};
  color: ${themes.colors.colorWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  width: 19rem;
  font-size: 1.7rem;
  font-weight: 600;

  transition: background 0.5s;
  :hover {
    background: ${themes.colors.colorBlue2};
  }
  @media ${themes.device.laptopL} {
    font-size: 1.4rem;
    height: 5.5rem;
    width: 16rem;
  }
`;

const MenuButton = styled.div`
  display: none;
  @media ${themes.device.laptop} {
    display: flex;
    height: fit-content;
    align-self: center;
    width: auto;
    justify-content: flex-end;

  }

.menu-container {
  .bars {
    width: 40px;
    height: 40px;
    position: relative;
    transition: transform 0.2s  cubic-bezier(0.694,  0.048, 0.335, 1.000);

    span {
      display: block;
      width: 100%;
      height: 4px;
      background: ${themes.colors.colorWhite};
      margin-top: 8px;
      &:first-child {
        margin-top: 0;
        transform: scaleX(1);
        transition: transform 0.2s  cubic-bezier(0.694,  0.048, 0.335, 1.000);
        transition-delay: 0.2s;
      }
      &:nth-child(3) {
        width: 65%;
        transition: width 0.2s  cubic-bezier(0.694,  0.048, 0.335, 1.000);
        transition-delay: 0.2s;
      }
    }
    .other-bar {
      width: 4px;
      height: 0;
      background-color: ${themes.colors.colorWhite};
      position: absolute;
      top: -5px;
      left: 50%;
      margin-left: -3px;
      transition: height 0.2s  cubic-bezier(0.694,  0.048, 0.335, 1.000);
      z-index: 10;
    }
  }
  &.is-menu-open {
    .bars {
      transform: rotate(45deg);
      transition-delay: 0.2s;
      span {
        &:first-child {
          transform: scaleX(0);
          transition: transform 0.2s  cubic-bezier(0.694,  0.048, 0.335, 1.000);
        }
        &:nth-child(3) {
          width: 0;
          transition: width 0.2s  cubic-bezier(0.694,  0.048, 0.335, 1.000);
        }
      }
      .other-bar {
        height: 40px;
        transition: height 0.2s  cubic-bezier(0.694,  0.048, 0.335, 1.000);
        transition-delay: 0.2s;
      }
    }
  }
`;
const ImgMenu = styled.img`
  @media ${themes.device.tablet} {
    width: 3.5rem;
  }
`;
export {
  HeaderCustom,
  LinkHeader,
  LinksHeader,
  DivEstimate,
  ButtonEstimate,
  LinkImage,
  MenuButton,
  ImgMenu
};
