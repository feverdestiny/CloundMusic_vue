import axios from "axios";

let _AXIOS = axios.create({});

_AXIOS.interceptors.request.use(config => {
  console.log(config);
  config.url = "api" + config.url;
  return config;
});

_AXIOS.interceptors.response.use(
  response => {
    console.log(response);
    let res = response.data;
    switch (response.status) {
      case 200:
        res = response.data;
        break;

      default:
        break;
    }
    return res;
  },
  err => {
    return Promise.reject(error);
  }
);

export default _AXIOS;