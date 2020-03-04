import styled from 'styled-components';
import { themes } from "../../theme/theme"

const FooterCustom = styled.footer`
  background: ${themes.colors.mainColor};
`;

const WithLogo = styled.div`
  display: flex;
  height: 35rem;
  width: 100%;
  padding: 5rem 10% 0;
  position: relative;
  z-index: 20;
  background: ${themes.colors.mainColor};
  @media ${themes.device.laptopL} {
    height: 29rem;
    padding: 5rem 15% 0;
  }
  @media ${themes.device.laptopS} {
    padding: 5rem 10% 0;
  }
  @media ${themes.device.laptop} {
    flex-flow: column;
    height: auto;
  }
`;

const LinkImage = styled.a`
  height: 5.8rem;
  width: 17.2rem;
  @media ${themes.device.laptop} {
    margin-bottom: 5rem;
  }
  @media ${themes.device.tabletS} {
    align-self: center;
    margin-bottom: 0;
  }
`;
const LinksFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 15rem 10rem 20%;

  @media ${themes.device.laptopL} {
    margin: 0 12rem 7rem 20%;
  }

  @media (max-width: 1290px) {
    margin: 0 6rem 7rem 6rem;
  }

  @media ${themes.device.laptop} {
    margin: 0 10rem 3rem 0rem;
  }
  @media ${themes.device.tabletS} {
    height: 18rem;
    align-self: center;
    margin: 4rem 0;
  }
`;
const LinkFooter = styled.a`
  font-size: 2.4rem;

  font-weight: 600;
  align-self: start;

  color: ${themes.colors.colorWhite};

  :after {
    content: '';
    width: 0px;
    margin-top: 5px;

    height: 1px;
    display: block;
    background: ${themes.colors.colorWhite};
    transition: 300ms;
  }
  :hover:after {
    width: 100%;
  }
  :active:after {
    width: 0;
  }
  @media ${themes.device.laptopL} {
    font-size: 1.7rem;
  }

  @media ${themes.device.tabletS} {
    align-self: center;
  }
`;
const MainInfo = styled.div`
  display: flex;

  padding-top: 1.2rem;
  @media ${themes.device.tabletS} {
    flex-flow: column;

    padding-top: 0;
  }
`;
const WithAddress = styled.div`
  width: 65%;

  @media ${themes.device.tabletS} {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
  }
`;
const GenQuestion = styled.div`
  font-size: 2.4rem;

  font-weight: 600;
  align-self: start;
  color: ${themes.colors.colorWhite};

  @media ${themes.device.laptopL} {
    font-size: 1.7rem;
  }

  @media ${themes.device.tabletS} {
    align-self: center;
  }
`;

const Address = styled.div`
  font-size: 2.4rem;
  line-height: 115%;
  white-space: pre-line;
  margin: 3rem 0rem 5rem;
  font-weight: 300;
  color: ${themes.colors.colorGray};

  @media ${themes.device.laptopL} {
    font-size: 1.7rem;
    line-height: 2rem;
    margin: 2rem 0rem 4rem;
  }

  @media ${themes.device.tabletS} {
    margin-bottom: 3rem;
  }
`;
const ReviewPlatform = styled.div`
  height: 3rem;
  display: flex;
  width: 50rem;
  justify-content: space-around;
  justify-content: space-evenly;
  transform: translate(-0.5rem, 0);

  @media ${themes.device.tablet} {
    transform: scale(0.7);
    position: relative;
    left: -8rem;
  }
  @media ${themes.device.tabletS} {
    left: 0;
    transform: scale(1);
    flex-flow: column;
    height: 20rem;
    justify-content: space-around;
    width: 100%;
  }
  @media ${themes.device.tabletS} {
    align-items: center;
    .clutch-widget {
      width: 135px;
    }
  }
`;
const LinkReview = styled.a`
  width: auto;
  height: 3rem;
  margin-right: 1rem;
  @media ${themes.device.tabletS} {
    margin-right: 0;
  }
`;

const HrCustom = styled.hr`
  width: 100%;
  border: 0;
  height: 0;
  border-top: 1px solid ${themes.colors.colorGray8};
  margin: 2rem 0 1.5rem;

  @media ${themes.device.laptop} {
    margin-top: 5rem;
  }
`;

const WithMedia = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10%;
  height: 10rem;
  align-items: center;
  @media ${themes.device.laptopL} {
    padding: 0 15%;
  }
  @media ${themes.device.laptopS} {
    padding: 0 10%;
  }
  @media (max-width: 1125px) {
    padding: 0 5%;
  }
  @media ${themes.device.laptop} {
    flex-direction: column;
    height: auto;
    padding-bottom: 2rem;
  }
`;
const LinksMedia = styled.div`
  display: flex;
  @media ${themes.device.laptop} {
    align-self: center;
    margin-bottom: 3rem;
  }
`;
const LinkMedia = styled.a`
  background: ${themes.colors.colorGray1};
  width: 6rem;
  height: 6rem;
  margin: 0 0.5rem;
  transition: background 0.5s;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    transition: filter 0.5s;
    width: 3rem;
    height: 3rem;
  }
  @media ${themes.device.laptopL} {
    width: 4.5rem;
    height: 4.5rem;
    img {
      height: 2rem;
      width: 2rem;
    }
  }
  @media ${themes.device.mobileM} {
    width: 5rem;
    height: 5rem;
  }
  :hover {
    background: ${themes.colors.colorBlue1};
    img {
      filter: brightness(3);
    }
  }
  :active {
    background: ${themes.colors.colorGray3};
    img {
      filter: none;
    }
  }
`;

const Copyright = styled.div`
	color: ${themes.colors.colorGray6};
	display: flex;
	align-self: center;
	justify-content: center;
  font-size: 1.4rem;
  line-height: 171.7%;
  font-weight: 300;
	margin: 0 4rem;
  width: 90rem;
  @media ${themes.device.laptopL} {
    font-size: 1.2rem;
	}
	@media ${themes.device.laptop} {
		width: 80%;
		text-align: center;
		margin-bottom: 3rem;
	}
	@media ${themes.device.tabletS}{
		width: 100%;
	}
}
`;
const PrivacyPolicy = styled.a`
  text-decoration: underline;
  display: flex;
  align-self: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 300;

  width: auto;
  white-space: nowrap;

  color: ${themes.colors.colorWhite};
  @media ${themes.device.laptopL} {
    font-size: 1.2rem;
  }
  @media ${themes.device.tabletS} {
    margin: 1rem 2rem;
    margin-bottom: 4rem;
  }
`;
export {
  LinkFooter,
  LinksFooter,
  LinkImage,
  FooterCustom,
  MainInfo,
  WithAddress,
  GenQuestion,
  Address,
  ReviewPlatform,
  LinkReview,
  HrCustom,
  WithLogo,
  WithMedia,
  LinksMedia,
  LinkMedia,
  Copyright,
  PrivacyPolicy,
};
