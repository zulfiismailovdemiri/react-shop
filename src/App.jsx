import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="w-full bg-gray-600 flex items-center px-4 mb-4">
          <div className="brand font-bold text-white text-3xl">
            <a href="/">Shop</a>
          </div>
          <ul className="ml-auto flex py-12 text-white font-bold">
            <li className="ml-4">Cart</li>
            <li className="ml-4">Sign In</li>
          </ul>
        </header>
        <main className="px-4 w-full">
          <Routes>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
