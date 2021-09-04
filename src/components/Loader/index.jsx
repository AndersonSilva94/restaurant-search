import React from 'react';
import Lottie from 'react-lottie';
import animatedLoading from '../../assets/restaurants-loading.json';

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={250} width={250} />;
}

export default Loader;
