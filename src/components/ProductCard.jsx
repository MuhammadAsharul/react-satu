/* eslint-disable react/prop-types */
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [jmlProduct, setJmlProduct] = useState(0);

  const tambahProduct = () => {
    setJmlProduct(jmlProduct + 1);
  }
  
  const kurangProduct = () => {
    if (jmlProduct > 0) {
      setJmlProduct(jmlProduct - 1);
    }
  }

  
   
  return (
    <div className="card">
          <img
            src={product.imageURL}
            alt="Avatar"
            style={{
              width: '100%',
              height: '200px',
              borderRadius: ' 10px 10px 0px 0px',
            }}
          />
          <div className="container">
            <h4>
              <b>{product.nama}</b>
            </h4>
            <p>{product.deskripsi}</p>
          </div>
          <div className={`card-keranjang ${jmlProduct > 0 ? 'jumlah-product': 'show-keranjang'}`}>
            {jmlProduct > 0 ? (<><button className="button" onClick={kurangProduct}>-</button>
            <div>{jmlProduct}</div>
            <button className="button" onClick={tambahProduct}>+</button></>): (<div className="keranjang" onClick={tambahProduct}>+ Keranjang</div>)}
          </div>
    </div>
  );
}

export default ProductCard;