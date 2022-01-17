import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';

import data from '../data';

export default function ProductScreen() {
  const { id } = useParams();
  const product = data.products.find((x) => x._id === Number(id));
  if (!product) {
    return <div>No Product Found</div>;
  }
  return (
    <div>
      <div>
        <Link to="/" className="text-blue-400">
          Go Back
        </Link>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-1/2">Image</div>
        <div className="flex flex-col lg:flex-row justify-between w-1/2">
          <div className="mb-12 w-full lg:w-2/3">
            <h1 className="font-bold text-3xl mb-2">{product.name}</h1>
            <div className="mb-8">
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>
            <div>{product.description}</div>
          </div>
          <div className="w-full lg:w-1/3 p-4 border border-gray-200 rounded">
            <div className="flex flex-col mb-4">
              <div>
                <div className="text-sm font-bold">Price</div>
                <div className="font-bold text-2xl">{product.price} €</div>
                <div>
                  Status:
                  {product.countInStock > 0 ? (
                    <span className="text-green-600"> Available</span>
                  ) : (
                    <span className="text-red-400"> Not Available</span>
                  )}
                </div>
              </div>
            </div>
            {!product.countInStock > 0 ? null : (
              <button
                type="submit"
                className="w-full p-4 bg-yellow-400 rounded hover:shadow"
              >
                Buy
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
