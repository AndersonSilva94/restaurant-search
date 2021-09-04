import React, { useState } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export function MapContainer(props) {
  const [maps, setMaps] = useState(null); // o estado é dinâmico, quando o usuário digitar o valor será alterado
  const { google } = props;

  // função que faz a busca de lugares próximos quando o mapa carregar e passar lat./long. para ela
  // 1) map -> onde vai marcar o mapa. 2) center -> centralizar o mapa
  const searchNearby = (map, center) => {
    // instanciar o serviço (documentação referencia)
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center, // location -> centralização do mapa
      radius: '20000', // radius -> em metros traz todas as referências próximas ao lugar marcado
      type: ['restaurant'], // filtra o tipo de lugar que será pesquisado
    };

    // utilitário que recebe o objeto de requisição e uma callback com os resultados e status
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesService.OK) {
        console.log('restaurantes => ', results);
      }
    });
  };

  // (evento, callback)
  const onMapReady = (_, map) => {
    setMaps(map);
    searchNearby(map, map.center);
  };

  return (
    <Map
      google={google}
      centerAroundCurrentLocation // verifica ao redor da localização
      onReady={onMapReady} // quando o mapa carregar
      onRecenter={onMapReady} // quando fizer a pesquisa e/ou o usuário permite que verifique sua localização
    />
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
