import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style';
import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

function RestaurantCard({ restaurant, onClick }) {
  const [loadImage, setLoadImage] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf activeColor="#e7711c" edit={false} value={restaurant.rating} />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={loadImage}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        onLoad={() => setLoadImage(true)}
        alt="Foto de restaurante"
      />
      {!loadImage && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
}

export default RestaurantCard;
