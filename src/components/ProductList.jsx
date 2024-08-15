import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="cards">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default ProductList;