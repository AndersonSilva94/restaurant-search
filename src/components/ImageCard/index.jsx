import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: ${(props) => props.photo};
  background-size: cover;
`;

function ImageCard({ photo }) {
  return <Card photo={photo} />;
}

export default ImageCard;
