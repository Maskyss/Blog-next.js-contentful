import React from "react";

import {
  Container,
  LinkHeader,
  LinksHeader,
  AnimationBlock,
  AnimationDiv,
  ButtonEstimate,
} from "./styles";

import { HeaderCustom } from "../Header/styles";

const Menu = ({ toggleMenu, origin, visibilityMenu, menuAnimation, about }) => {
  const heightTransStyle = {
    overflow: "hidden",
    height: "105%",
    background: "transparent",
    display: "block",
    transition: "height 1s, background 1s"
  };
  const heightWhiteStyle = {
    overflow: "hidden",
    height: "105%",
    background: "#0E0E0E",
    display: "block"
  };
  const styleNone = {
    overflow: "hidden",
    background: "transparent",
    transition: "height 1s, background 1s"
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
              ? { opacity: 0, transition: "opacity 0.5s" }
              : { opacity: 1, transition: "opacity 1s" }
          }
        >
            <ButtonEstimate
            onClick={toggleMenu}
            href={about ? `#contact` : `${origin}#contact`}
          >
            Estimate
          </ButtonEstimate>
          <LinkHeader onClick={toggleMenu} href={`${origin}#services`}>
            Services
          </LinkHeader>
          <LinkHeader onClick={toggleMenu} href={`${origin}#projects`}>
            Projects
          </LinkHeader>
          <LinkHeader onClick={toggleMenu} href={`${origin}/about/`}>
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
