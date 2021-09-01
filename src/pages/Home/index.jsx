import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Container, Search, Logo, Wrapper, Map, CarouselTitle } from './style';
import logo from '../../assets/logo.svg';

function Home() {
  const [inputValue, setInputValue] = useState();

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
      </Container>
      <Map />
    </Wrapper>
  );
}

export default Home;
