import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
`;

export const Map = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100vw;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 30px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0 16px 10px;
`;

export const ModalCard = styled.div`
  display: flex;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.colors.text};
  font-weight: normal;
  line-height: 19px;
  font-size: 16px;
`;

export const ModalOpened = styled.div`
  margin-bottom: 10px;
  background-color: ${(props) => (props.isOpen ? '#FF2800' : '#00FF00')};
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-weight: normal;
  line-height: 19px;
  font-size: 20px;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-right: 15px;
`;

export const ModalPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 6px;
  object-fit: cover;
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
  align-self: center;
`;

// ao estilizar tags ou elementos nativos, use styled.elemento
// ao estilizar componentes, use styled(Elemento)
