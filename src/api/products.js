import axios from "axios";

export const fetchProductsApi = async () => {
  const response = await axios.get("http://127.0.0.1:3001/products");
  return response;
};
export const createProductApi = async () => {
  const response = await axios.get("http://127.0.0.1:3001/products");
  return response;
};
export const editProductApi = async (id, data) => {
  const response = await axios.put(
    `http://127.0.0.1:3001/products/${id}`,
    data
  );
  return response;
};
export const deleteProductApi = async () => {
  const response = await axios.get("http://127.0.0.1:3001/products");
  return response;
};
