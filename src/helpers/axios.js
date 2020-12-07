import axios from "axios";

export default axios.create({
  baseURL: "http://52.90.229.55:3001/api/v1",
  // baseURL: "http://192.168.100.27:4344/api/v1",
});
