import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style';
import restaurante from '../../assets/restaurante-fake.png';

function RestaurantCard() {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do Restaurante</Title>
        <ReactStars count={5} isHalf activeColor="#e7711c" edit={false} value={4} />
        <Address>Manaus, AM, 69000</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="" />
    </Restaurant>
  );
}

export default RestaurantCard;
