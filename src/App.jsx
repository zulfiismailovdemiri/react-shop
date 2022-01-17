import data from './data';
import Product from './components/Product';
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
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
