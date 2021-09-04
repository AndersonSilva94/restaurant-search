import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants } from '../../redux/actions/restaurants';

export function MapContainer(props) {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
  const [map, setMap] = useState(null); // o estado é dinâmico, quando o usuário digitar o valor será alterado
  const { google, query } = props;

  // renderizar toda vez que a query for modificada
  useEffect(() => {
    // se não for null
    if (query) {
      searchByQuery(query);
    }
  }, [query]);

  // função que vai pesquisar conforme o valor que o usuário passar
  const searchByQuery = (query) => {
    // instanciar o serviço (documentação referencia)
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center, // location -> centralização do mapa (agora baseada na pesquisa do usuário)
      radius: '2000', // radius -> em metros traz todas as referências próximas ao lugar marcado
      type: ['restaurant'], // filtra o tipo de lugar que será pesquisado
      query, // qual o valor que o usuário digitou
    };

    // utilitário que recebe o objeto de requisição e uma callback com os resultados e status
    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // console.log('restaurantes => ', results);
        dispatch(setRestaurants(results));
      }
    });
  };

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
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // console.log('restaurantes => ', results);
        dispatch(setRestaurants(results));
      }
    });
  };

  // (evento, callback)
  const onMapReady = (_, map) => {
    setMap(map);
    searchNearby(map, map.center);
  };

  return (
    <Map
      google={google}
      centerAroundCurrentLocation // verifica ao redor da localização
      onReady={onMapReady} // quando o mapa carregar
      onRecenter={onMapReady} // quando fizer a pesquisa e/ou o usuário permite que verifique sua localização
    >
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
