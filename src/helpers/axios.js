import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.100.27:4444/api/v1",
});
