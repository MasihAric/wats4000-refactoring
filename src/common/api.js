import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = '6e6e403d15380274065d5bdceb3b2436';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });