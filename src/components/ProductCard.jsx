/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import ProductEdit from "./ProductEdit";

const ProductCard = ({ product, onDeleteProduct, onEditProduct }) => {
  const { id, nama, deskripsi, imageURL } = product;
  const [jmlProduct, setJmlProduct] = useState(0);

  const [showEdit, setShowEdit] = useState(false);
  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmitEdit = (id, data) => {
    setShowEdit(false);
    onEditProduct(id, data);
  };

  const cancelEdit = () => {
    setShowEdit(false);
  };

  const tambahProduct = () => {
    setJmlProduct(jmlProduct + 1);
  };
  const kurangProduct = () => {
    if (jmlProduct > 0) {
      setJmlProduct(jmlProduct - 1);
    }
  };

  return (
    <div className="card">
      {showEdit ? (
        <ProductEdit
          product={product}
          onEditProduct={handleSubmitEdit}
          cancelEdit={cancelEdit}
        />
      ) : (
        <div>
          <div className="edit-delete">
            <AiTwotoneEdit className="icon-edit" onClick={handleShowEdit} />
            <MdDeleteForever
              className="icon-delete"
              onClick={() => {
                onDeleteProduct(id);
              }}
            />
          </div>
          <img
            src={product.imageURL}
            alt="Avatar"
            style={{
              width: "100%",
              height: "200px",
              borderRadius: " 10px 10px 0px 0px",
            }}
          />
          <div className="container">
            <h4>
              <b>{product.nama}</b>
            </h4>
            <p>{product.deskripsi}</p>
          </div>
          <div
            className={`card-keranjang ${
              jmlProduct > 0 ? "jumlah-product" : "show-keranjang"
            }`}
          >
            {jmlProduct > 0 ? (
              <>
                <button className="button" onClick={kurangProduct}>
                  -
                </button>
                <div>{jmlProduct}</div>
                <button className="button" onClick={tambahProduct}>
                  +
                </button>
              </>
            ) : (
              <div className="keranjang" onClick={tambahProduct}>
                + Keranjang
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
