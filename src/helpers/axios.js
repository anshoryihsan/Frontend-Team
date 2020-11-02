import axios from "axios";

export default axios.create({
  baseURL: "http://54.86.186.28:4444/api/v1",
  // baseURL: "http://192.168.100.27:4344/api/v1",
});
