import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c0c5deb210a44a0d9dbe422b8206287a",
  },
});
