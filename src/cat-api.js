import axios from 'axios';

const apiKey =
  'live_JB9Pm9hRBpVL8Lf2Ug2tzkgrYXpQvsElVcQ3I5S6gJ7sL9t0G4BqOVApuHllAmlG';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] = apiKey;

const fetchBreeds = () =>
  axios.get('breeds').then(response => {
    if (!response.data) return new Error(response.status);
    return response.data;
  });

const fetchCatByBreed = id =>
  axios.get(`images/search?breed_ids=${id}`).then(response => {
    if (!response.data) return new Error(response.status);
    return response.data[0];
  });

module.exports = {
  fetchBreeds,
  fetchCatByBreed,
};
