import React from 'react';
import data from '../data';
import Product from '../components/Product';

export default function HomeScreen() {
  return (
    <div className="product-list grid grid-cols-3 gap-4 items-center">
      {data.products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}
