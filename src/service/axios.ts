import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/price",
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
  responseType: "json",
  // baseURL: 'http://localhost:5000'
});

instance.interceptors.response.use(
  (response: any) => {
    console.log("Response", response);
    return response;
  },
  (error: any) => {
    if (error) console.log(error.statusCode);
    return;
  }
);

export default instance;
