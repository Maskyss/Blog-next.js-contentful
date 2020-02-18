import React, { useEffect } from 'react';
import lottie from 'lottie-web';

import {
  LinkImage,
  AnimationDiv,
  AnimationContainer,
  Title,
  Subtitle,
  ButtonBack,
} from './styles';

import animation from '../../static/animations/BlackArchimed.json';

const Logo = '../../static/Logo.svg';

const Page404 = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('animation404'),
      animType: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
  }, []);
  return (
    <>
      <LinkImage href="/">
        <img src={Logo} alt="logo" />
      </LinkImage>

      <AnimationContainer>
        <AnimationDiv id="animation404" />
      </AnimationContainer>
      <Title>Looks like you got lost</Title>
      <Subtitle>404 page</Subtitle>
      <ButtonBack href="/">Back</ButtonBack>
    </>
  );
};

export default Page404;
