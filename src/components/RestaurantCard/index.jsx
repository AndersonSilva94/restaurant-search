import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style';
import restaurante from '../../assets/restaurante-fake.png';

function RestaurantCard({ restaurant }) {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf activeColor="#e7711c" edit={false} value={restaurant.rating} />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        alt="Foto de restaurante"
      />
    </Restaurant>
  );
}

export default RestaurantCard;
