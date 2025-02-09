/* eslint-disable camelcase */
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { useSelector } from 'react-redux';
// import TextField, { Input } from '@material/react-text-field';
// import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';

import {
  // Material,
  TextInputStyle,
  Container,
  ToggleTheme,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalTitle,
  ModalContent,
  ModalOpened,
  ModalCard,
  ModalInfo,
  ModalPhoto,
} from './style';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

function Home({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);
  const [loadImage, setLoadImage] = useState(false);
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
          <ToggleTheme>
            <Switch
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              offColor={colors.offColor}
              onColor={colors.primary}
            />
          </ToggleTheme>
          <Logo src={logo} alt="restaurant search logo" />
          <TextInputStyle
            placeholder="Pesquisar restaurante ou endereço"
            value={inputValue}
            onKeyPress={handleKeyPress}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {/* <Material role="button" icon="search" /> */}
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua área</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <Card
                    onClick={() => handleOpenModal(restaurant.place_id)}
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <ModalCard>
            <ModalInfo>
              <ModalTitle>{restaurantSelected?.name}</ModalTitle>
              <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
              <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
              <ModalOpened isOpen={!restaurantSelected?.opening_hours?.open_now}>
                {restaurantSelected?.opening_hours?.open_now
                  ? 'Aberto agora'
                  : 'Fechado neste momento'}
              </ModalOpened>
            </ModalInfo>
            <ModalPhoto
              imageLoaded={loadImage}
              src={restaurantSelected.photos ? restaurantSelected.photos[0].getUrl() : restaurante}
              onLoad={() => setLoadImage(true)}
              alt={`Foto de ${restaurantSelected?.name}`}
            />
            {!loadImage && <Skeleton width="150px" height="150px" />}
          </ModalCard>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
}

export default Home;
