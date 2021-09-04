import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants, setRestaurant } from '../../redux/actions/restaurants';

export function MapContainer(props) {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
  const [map, setMap] = useState(null); // o estado é dinâmico, quando o usuário digitar o valor será alterado
  const { google, query, placeId } = props;

  // renderizar toda vez que a query for modificada
  useEffect(() => {
    // se não for null
    if (query) {
      searchByQuery(query);
    }
  }, [query]);

  useEffect(() => {
    if (placeId) {
      getRestaurantById(placeId);
    }
  }, [placeId]);

  // função que vai pegar o place_id do restaurante e buscar todas as informações mais detalhadas sobre
  const getRestaurantById = (placeId) => {
    // instanciar o serviço (documentação referencia)
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurant(null));

    const request = {
      placeId,
      fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
    };

    // utilitário que recebe o objeto de requisição e uma callback com os resultados e status
    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // console.log('restaurantes => ', results);
        dispatch(setRestaurant(place));
      }
    });
  };

  // função que vai pesquisar conforme o valor que o usuário passar
  const searchByQuery = (query) => {
    // instanciar o serviço (documentação referencia)
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));

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
    dispatch(setRestaurants([]));

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
      {...props}
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
