import styled from 'styled-components';
import { themes } from "../theme/theme"

const BigTitle = styled.div`
  color: ${ themes.colors.colorWhite};

  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 6.4rem;
  line-height: 132.5%;
  margin-bottom: 3rem;

  @media ${ themes.device.laptopL} {
    font-size: 4.8rem;
  }
  @media ${ themes.device.tabletS} {
    margin-bottom: 4rem;
  }
  @media ${ themes.device.mobileM} {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }
`;

const Paragraph = styled.div`
  font-size: 2rem;
  line-height: 171.7%;
  font-weight: 300;
  color: ${ themes.colors.colorGray};

  @media ${ themes.device.laptopL} {
    font-size: 1.7rem;
  }

  @media ${ themes.device.mobileM} {
    font-size: 1.4rem;
  }
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ themes.colors.colorBlue1};
  color: ${ themes.colors.colorWhite};

  transition: background 0.5s;
  font-size: 1.7rem;
  font-weight: 600;

  :hover {
    background: ${ themes.colors.colorBlue2};
  }
  @media ${ themes.device.laptopL} {
    font-size: 1.4rem;
  }
`;
export { Paragraph, BigTitle, Button };
