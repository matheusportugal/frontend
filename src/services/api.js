import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-backend-aula1.herokuapp.com"
});

export default api;
