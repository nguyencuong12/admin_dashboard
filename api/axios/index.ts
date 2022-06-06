import { default as axios, AxiosError } from "axios";

// let url = "https://api.sashimeomeo.com";
let url = process.env.HOST_API;

const instanceAxios = axios.create({
  baseURL: url,
});
instanceAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err: AxiosError) => {
    console.log("ERR REQUEST", err);
  },
);
instanceAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err: AxiosError) => {
    switch (err.response?.status) {
      case 401: {
        // console.log("401 CALL !!");
        window.alert("Access denied");

        break;
      }
      default: {
        window.alert("ERROR");
        // window.alert(err.response.data.error);
        break;
      }
    }

    // console.error(err.response.data.message);
    // window.alert(err.data);
    // console.log("ERR RESPONSE", err.message);
  },
);
export default instanceAxios;
