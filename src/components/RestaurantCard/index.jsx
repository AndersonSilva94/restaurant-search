import React from 'react';
import { Restaurant, RestaurantInfo, Title, Address } from './style';

function RestaurantCard() {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do Restaurante</Title>
        <p>Avaliação</p>
        <Address>Manaus, AM, 69000</Address>
      </RestaurantInfo>
    </Restaurant>
  );
}

export default RestaurantCard;
