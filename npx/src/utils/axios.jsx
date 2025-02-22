import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/", //this is base URL for TMDB
});
export default instance;