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

const product = (product_id) => {
  return axios.get(`${BASE_URL}/products/${product_id}`);
};

const productsAvailable = (affiliate_id) => {
  return axios.get(`${BASE_URL}/affiliate/${affiliate_id}/products/available`);
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

const productAffiliate = (affiliate_id, product_id) => {
  return axios.post(
    `${BASE_URL}/affiliate/${affiliate_id}/products/${product_id}`
  );
};

const getProductAffiliate = (affiliate_id) => {
  return axios.get(`${BASE_URL}/affiliate/${affiliate_id}/products`);
};

export default {
  login,
  productsBySupplier,
  createProduct,
  createAffiliate,
  createSupplier,
  productsAvailable,
  product,
  productAffiliate,
  getProductAffiliate,
};
