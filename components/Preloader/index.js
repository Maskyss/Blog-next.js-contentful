import React, { useEffect } from 'react';
import lottie from 'lottie-web';

import { AnimationDiv } from './styles';

import animation from '../../static/animations/Preloader.json';

const PreloaderComponent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('preloader'),
      animType: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
  }, []);
  return <AnimationDiv id="preloader" />;
};

export default PreloaderComponent;
