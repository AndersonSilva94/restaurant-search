import React from 'react';
import Lottie from 'react-lottie';
import animatedLoading from '../../assets/restaurant.json';

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
}

export default Loader;
