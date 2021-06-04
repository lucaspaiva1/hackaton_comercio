const axios = require("axios");
const BASE_URL = process.env.VUE_APP_API_URL;

const login = ({ username, password }) => {
  return axios.post(
    `${BASE_URL}/login`,
    { username, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

const getAllProducts = () => {
  return axios.get(`${BASE_URL}/suppliers`);
};

export default {
  login,
  getAllProducts,
};
