import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <div
      key={product._id}
      className="product-item p-4 bg-gray-100 rounded-md shadow"
    >
      <div className="product-item-content flex flex-col">
        <a href={`product/${product._id}`}>
          <img src={product.image} alt="" />
        </a>
        <div className="font-bold mb-4 text-2xl">
          <a href={`product/${product._id}`}>{product.name}</a>
        </div>
        <div className="mb-4">{product.description}</div>
        <div className="mb-4 font-bold text-2xl">{product.price} €</div>
        <Rating rating={product.rating} numReviews={product.numReviews} />
      </div>
    </div>
  );
}
export default Product;
