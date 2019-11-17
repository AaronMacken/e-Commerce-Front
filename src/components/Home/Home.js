import React, { Component } from "react";
import "./Home.css";
import ClipTransition from "../ClipTransition/ClipTransition";
import LandingButton from "../LandingButton/LandingButton";
export default class Landing extends Component {
  render() {
    return (
      <div>
        <header className="header">
          {/* first row */}

          <div className="landing-col-left">
            <h1 className="header-title">CBD, glass ...and more</h1>
          </div>

          <div className="landing-col-right">
            <h3>Based in North Carolina, USA</h3>
            <div className="button-container">
              <LandingButton text={'shop'} color={'#76d3d6'}/>
              <LandingButton text={'contact'} color={'#bd3e3e'}/>
            </div>
          </div>
        </header>
        <ClipTransition path="0 0, 100% 0%, 100% 49%, 0% 100%" />
        
        <section className="product-list-section">
          <p className="product-list-section-title">Popular Products</p>
          <ul className="product-list">

            <li className="product-list-item">
              <img
                height="300"
                width="300"
                src="/prod1.jpg"
                className="product-list-item-img"
              ></img>
              <h2 className="product-list-item-title">Sun State Pain Cream 250mg</h2>
              <span className="product-list-item-price">$34.99</span>
              <button className="product-list-item-add">Add to cart</button>
            </li>

            <li className="product-list-item">
              <img
                height="300"
                width="300"
                src="/prod2.jpg"
                className="product-list-item-img"
              ></img>
              <h2 className="product-list-item-title">Hemp Bomb Pain Freeze Gel 50mg</h2>
              <span className="product-list-item-price">$14.99</span>
              <button className="product-list-item-add">Add to cart</button>
            </li>

            <li className="product-list-item">
              <img
                height="300"
                width="300"
                src="/prod3.jpg"
                className="product-list-item-img"
              ></img>
              <h2 className="product-list-item-title">Koi Hand & Body Lotion - Lavender - 4.25oz, 200mg</h2>
              <span className="product-list-item-price">$44.99</span>
              <button className="product-list-item-add">Add to cart</button>
            </li>
          </ul>
          <button className="product-list-item-add shop-all-btn">Shop All</button>
        </section>
        <ClipTransition path="0 49%, 100% 0, 100% 100%, 0% 100%" />
      </div>
    );
  }
}

{
  /* <button className="arrow-btn">
            <i class="fas fa-chevron-down"></i>
          </button> */
}
