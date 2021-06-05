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

const productsBySupplier = (supplier_id) => {
  return axios.get(`${BASE_URL}/products?supplier=${supplier_id}`);
};

const createProduct = (product) => {
  return axios.post(`${BASE_URL}/products`, product);
};

const createAffiliate = (affiliate) => {
  return axios.post(`${BASE_URL}/affiliates`, affiliate);
};

const createSupplier = (supplier) => {
  return axios.post(`${BASE_URL}/suppliers`, supplier);
};

export default {
  login,
  productsBySupplier,
  createProduct,
  createAffiliate,
  createSupplier,
};
