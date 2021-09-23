import React from 'react';
import Lottie from 'react-lottie';
import animatedLoading from '../../assets/restaurant.json';
import { Container } from './style';

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={250} width={250} />
    </Container>
  );
}

export default Loader;
