import React from 'react';

export default function Cart() {
  return (
    <div className='cart-container'>
      <div className="first-row">
        <span className="first-col">
          <img src="/vector.jpg" />
        </span>
        <span className="second-col">
          <img src="/Logo1.jpg" />
        </span>
      </div>
      <div className="second-row">
        <input placeholder='Search' className='search' />
      </div>
      <div className="content">
        <div className="image">
          <img src="/watch.jpg" />
          <div className="number">
            <span className="one">
              -
            </span>
            <span className="two">
              1
            </span>
            <span className="three">
              +
            </span>
          </div>
        </div>
        <div className="text">
          <span className="name">
            Querty Watch
          </span>
          <span className="description">
            Leather strap
          </span>
          <span className="rupess">
            <b> 12,000</b>
          </span>
          <span className="color">
            <b>Color</b>: Brown
          </span>
          <span className="stock">
            In stock
          </span>
          <span className="button">
            <button className="delete-button">
              Delete
            </button>
            <button className="see-more-button">
              See more like this
            </button>
          </span>

        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src="/yoga.jpg" />
          <div className="number">
            <span className="one">
              -
            </span>
            <span className="two">
              1
            </span>
            <span className="three">
              +
            </span>
          </div>
        </div>
        <div className="text">
          <span className="name">
            Yoga mat
          </span>
          <span className="description">
            Lorem ipsum
          </span>
          <span className="rupess">
            1000
          </span>
          <span className="color">
            Color: Blue
          </span>
          <span className="stock">
            In stock
          </span>
          <span className="button">
            <button className="delete-button">
              Delete
            </button>
            <button className="see-more-button">
              See more like this
            </button>
          </span>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img src="/anchor.jpg" />
          <div className="number">
            <span className="one">
              -
            </span>
            <span className="two">
              1
            </span>
            <span className="three">
              +
            </span>
          </div>
        </div>
        <div className="text">
          <span className="name">
            Anchor Bracelet
          </span>
          <span className="description">
            Lorem ipsum
          </span>
          <span className="rupess">
            500
          </span>
          <span className="color">
            Color: Gold
          </span>
          <span className="stock">
            In Stock
          </span>
          <span className="button">
            <button className="delete-button">
              Delete
            </button>
            <button className="see-more-button">
              See more like this
            </button>
          </span>
        </div>
      </div>
      <div className="proceed-container">
      <span className="rupess">
            Subtotal 500
          </span>
          <button className="proceed-button">
          Proceed to buy (3 items)
            </button>
            </div>
    </div>
  )
}
