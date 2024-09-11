/* eslint-disable no-unused-vars */
import React from "react";
import ProductList from "./components/ProductList.jsx";
import { ProductCreate } from "./components/ProductCreate.jsx";
import { Products } from "./data/product.js";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState(Products);
  const onEditProduct = (id, data) => {
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...data };
      }
      return prod;
    });
    setProducts(updatedProducts);
    // console.log(products);
  };
  const onCreateProduct = (product) => {
    // console.log('parent : ', product)
    setProducts([
      ...products,
      { id: Math.round(Math.random() * 7777), ...product },
    ]);
  };

  const onDeleteProduct = (id) => {
    const updatedProduct = products.filter((prod) => {
      return prod.id != id;
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
