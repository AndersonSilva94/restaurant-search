import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './style';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

function Home() {
  const [inputValue, setInputValue] = useState();

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
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
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
        </Search>
        <CarouselTitle>Na sua área</CarouselTitle>
        <Carousel {...settings}>
          <Card photo={restaurante} title="Nome do restaurante" />
          <Card photo={restaurante} title="Nome do restaurante" />
          <Card photo={restaurante} title="Nome do restaurante" />
          <Card photo={restaurante} title="Nome do restaurante" />
          <Card photo={restaurante} title="Nome do restaurante" />
        </Carousel>
      </Container>
      <Map />
    </Wrapper>
  );
}

export default Home;
