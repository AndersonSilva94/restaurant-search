import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel } from './style';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

function Home() {
  const [inputValue, setInputValue] = useState();
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setQuery(inputValue);
    }
  };

  const handleOpenModal = (placeId) => {
    setPlaceId(placeId);
    setModalOpened(true);
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="restaurant search logo" />
          <TextField
            label="Pesquisar restaurante"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.place_id}
                photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                title={restaurant.name}
              />
            ))}
          </Carousel>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
}

export default Home;
