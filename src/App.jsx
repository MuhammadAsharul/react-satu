/* eslint-disable no-unused-vars */
import React from "react";
import ProductList from "./components/ProductList.jsx";
import { ProductCreate } from "./components/ProductCreate.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { editProductApi, fetchProductsApi } from "./api/products.js";

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetchProductsApi();
    setProducts(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const onEditProduct = async (id, data) => {
    const response = await editProductApi(id, data);
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...response.data };
      }
      return prod;
    }); 
    setProducts(updatedProducts);
    // console.log(products);
  };

  const onCreateProduct = async (product) => {
    const response = await axios.post(
      "http://127.0.0.1:3001/products",
      product
    );
    setProducts([...products, response.data]);
  };

  const onDeleteProduct = async (id) => {
    await axios.delete(`http://127.0.0.1:3001/products/${id}`);
    const updatedProduct = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(updatedProduct);
  };

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
      />
    </>
  );
};

export default App;
