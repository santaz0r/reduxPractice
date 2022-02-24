import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

const httpservice = {
  get: axios.get,
  post: axios.post,
};
export default httpservice;
