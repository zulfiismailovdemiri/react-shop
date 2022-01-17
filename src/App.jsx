import data from './data';

function App() {
  return (
    <div>
      <header className="w-full bg-gray-600 flex items-center px-4">
        <div className="brand font-bold text-white text-3xl">Shop</div>
        <ul className="ml-auto flex py-12 text-white font-bold">
          <li className="ml-4">Cart</li>
          <li className="ml-4">Sign In</li>
        </ul>
      </header>
      <main className="py-12 px-4 w-full">
        <div className="product-list grid grid-cols-3 gap-4 items-center">
          {data.products.map((product) => (
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
                <div>Ratings: {product.ratings}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
