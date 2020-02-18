import React, { useState } from 'react';
import lottie from 'lottie-web';
import Menu from '../Menu';

import {
  HeaderCustom,
  LinkImage,
  LinkHeader,
  LinksHeader,
  DivEstimate,
  ButtonEstimate,
  MenuButton,
} from './styles';

import animation from '../../static/animations/Menu.json';

const Logo = '../../static/Logo.svg';

const Header = ({ scrollToTop, origin, background, about }) => {
  const [visibilityMenu, setVisibilityMenu] = useState(false);
  const [styleMenu, setStyleMenu] = useState('menu-container');

  const [menuAnimation, setMenuAnimation] = useState(true);

  const _visibilityMenuFunc = () => {
    const { body } = document;

    if (visibilityMenu === false) {
      setVisibilityMenu(!visibilityMenu);
      setStyleMenu('menu-container is-menu-open');

      setMenuAnimation(true);

      lottie.loadAnimation({
        container: document.getElementById('menuAnimation'),
        animType: 'svg',
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      });

      setTimeout(() => {
        setMenuAnimation(false);
      }, 550);
    }
    if (visibilityMenu === true) {
      setStyleMenu('menu-container');
      setTimeout(function() {
        setVisibilityMenu(!visibilityMenu);
      }, 300);
      setMenuAnimation(true);
    }
    visibilityMenu
      ? body.setAttribute('style', 'overflow-y:auto')
      : body.setAttribute('style', 'overflow-y:hidden');
  };

  return (
    <>
      <Menu
        origin={origin}
        toggleMenu={() => _visibilityMenuFunc()}
        visibilityMenu={visibilityMenu}
        menuAnimation={menuAnimation}
      />

      <HeaderCustom
        style={
          scrollToTop
            ? {
                paddingTop: '1rem',
                paddingBottom: '1rem',
                transition: 'padding 0.5s',
                zIndex: '56',
              }
            : { transition: 'padding 0.1s ', background }
        }
      >
        <LinkImage href="/">
          <img src={Logo} alt="logo" />
        </LinkImage>
        <LinksHeader>
          <LinkHeader href={`https://fulcrum.rocks/#services`}>Services</LinkHeader>
          <LinkHeader href={`https://fulcrum.rocks/#projects`}>Projects</LinkHeader>
          <LinkHeader href={`https://fulcrum.rocks//about/`}>About</LinkHeader>
          <LinkHeader href={`${origin}/blog/`}>Blog</LinkHeader>
        </LinksHeader>
        <DivEstimate>
          <ButtonEstimate href={`https://fulcrum.rocks/#contact`}>
            Estimate
          </ButtonEstimate>
        </DivEstimate>
        <MenuButton>
          <div onClick={_visibilityMenuFunc} className={styleMenu} alt="menu">
            <div className="bars">
              <span />
              <span />
              <span />
              <div className="other-bar" />
            </div>
          </div>
        </MenuButton>
      </HeaderCustom>
    </>
  );
};

export default Header;
