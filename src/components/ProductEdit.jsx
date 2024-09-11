/* eslint-disable react/prop-types */
import { useState } from "react";

const ProductEdit = ({ product, onEditProduct, cancelEdit }) => {
  const initialState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };

  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    onEditProduct(product.id, formData);
  };
  const onCancelEdit = (e) => {
    e.preventDefault();
    cancelEdit();
  };
  return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="nama"
            type="text"
            value={nama}
            className="edit-input-text"
            placeholder="nama produk"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="deskripsi"
            type="text"
            value={deskripsi}
            className="edit-input-text"
            placeholder="deskripsi"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="imageURL"
            type="text"
            value={imageURL}
            className="edit-input-text"
            placeholder="image produk"
          />
        </div>
        <input type="submit" value="Save" className="edit-input-submit save" />
        <button onClick={onCancelEdit} className="edit-input-submit cancel">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
