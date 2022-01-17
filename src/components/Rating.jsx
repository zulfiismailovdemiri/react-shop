import React from 'react';

export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div>
      <div>
        <span
          className={
            rating >= 1
              ? 'text-yellow-400 fa fa-star'
              : rating >= 0.5
              ? 'text-yellow-400 far fa-star'
              : 'text-yellow-400 far fa-star'
          }
        ></span>
        <span
          className={
            rating >= 2
              ? 'text-yellow-400 fa fa-star'
              : rating >= 0.5
              ? 'text-yellow-400 far fa-star'
              : 'text-yellow-400 far fa-star'
          }
        ></span>
        <span
          className={
            rating >= 3
              ? 'text-yellow-400 fa fa-star'
              : rating >= 0.5
              ? 'text-yellow-400 far fa-star'
              : 'text-yellow-400 far fa-star'
          }
        ></span>
        <span
          className={
            rating >= 4
              ? 'text-yellow-400 fa fa-star'
              : rating >= 0.5
              ? 'text-yellow-400 far fa-star'
              : 'text-yellow-400 far fa-star'
          }
        ></span>
        <span
          className={
            rating >= 5
              ? 'text-yellow-400 fa fa-star'
              : rating >= 0.5
              ? 'text-yellow-400 far fa-star'
              : 'text-yellow-400 far fa-star'
          }
        ></span>
        <span className="ml-4">{numReviews + ' reviews'}</span>
      </div>
    </div>
  );
}
