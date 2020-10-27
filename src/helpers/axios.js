import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.100.27:4000/api/v1",
});
