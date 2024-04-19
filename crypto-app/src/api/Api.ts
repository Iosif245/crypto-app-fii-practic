import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-18-185-117-144.eu-central-1.compute.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;