import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton';

const Card = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  box-sizing: border-box;
  color: white;
  padding: 5px;
  font-size: 0.9rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

function ImageCard({ photo, title }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="100px" height="100px" />
      )}
    </>
  );
}

export default ImageCard;
