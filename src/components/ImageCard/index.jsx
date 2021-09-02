import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: white;
  padding: 10px;
  font-size: 0.9rem;
`;

function ImageCard({ photo, title }) {
  return (
    <Card photo={photo}>
      <Title>{title}</Title>
    </Card>
  );
}

export default ImageCard;
