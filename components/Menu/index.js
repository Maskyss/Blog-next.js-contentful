import React from 'react';

import {
  Container,
  ButtonEstimate,
  LinkHeader,
  LinksHeader,
  AnimationBlock,
  AnimationDiv,
} from './styles';

import { HeaderCustom } from '../Header/styles';

const Menu = ({ toggleMenu, origin, visibilityMenu, menuAnimation, about }) => {
  const heightTransStyle = {
    overflow: 'hidden',
    height: '105%',
    background: 'transparent',
    display: 'block',
    transition: 'height 1s, background 1s',
  };
  const heightWhiteStyle = {
    overflow: 'hidden',
    height: '105%',
    background: '#0E0E0E',
    display: 'block',
  };
  const styleNone = {
    overflow: 'hidden',
    background: 'transparent',
    // height: '0',
    // display: 'none',
    transition: 'height 1s, background 1s',
  };

  return (
    <>
      <Container
        style={
          visibilityMenu
            ? menuAnimation
              ? heightTransStyle
              : heightWhiteStyle
            : styleNone
        }
      >
        {menuAnimation && (
          <AnimationBlock>
            <AnimationDiv id="menuAnimation" />
          </AnimationBlock>
        )}
        <HeaderCustom />
        <LinksHeader
          style={
            menuAnimation
              ? { opacity: 0, transition: 'opacity 0.5s' }
              : { opacity: 1, transition: 'opacity 1s' }
          }
        >
          <ButtonEstimate
            onClick={toggleMenu}
            href={`https://fulcrum.rocks/#contact`}
          >
            Estimate
          </ButtonEstimate>
          {/* костыли ИСПРАВИТЬ когда будут страницы */}
          <LinkHeader onClick={toggleMenu} href={`https://fulcrum.rocks/#services`}>
            Services
          </LinkHeader>
          <LinkHeader onClick={toggleMenu} href={`https://fulcrum.rocks/#projects`}>
            Projects
          </LinkHeader>
          <LinkHeader onClick={toggleMenu} href={`https://fulcrum.rocks/about/`}>
            About
          </LinkHeader>
          <LinkHeader onClick={toggleMenu} href={`${origin}/blog/`}>
            Blog
          </LinkHeader>
        </LinksHeader>
      </Container>
    </>
  );
};
export default Menu;
