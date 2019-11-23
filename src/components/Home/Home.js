import React, { Component } from "react";
import "./Home.css";
import ClipTransition from "../ClipTransition/ClipTransition";
import LandingButton from "../LandingButton/LandingButton";
import ProductListItem from "../ProductListItem/ProductListItem";

export default class Landing extends Component {
  static defaultProps = {
    popularProducts: [
      {
        img: "prod1.jpg",
        title: "Sun State Pain Cream 250mg",
        price: 34.99,
        id: 1
      },
      {
        img: "prod2.jpg",
        title: "Hemp Bomb Pain Freeze Gel 50mg",
        price: 14.99,
        id: 2
      },
      {
        img: "prod3.jpg",
        title: "Koi Hand & Body Lotion - Lavender - 4.25oz, 200mg",
        price: 44.99, 
        id: 3
      }
    ]
  };

  render() {

    const product = this.props.popularProducts;

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
              <LandingButton text={"shop"} color={"#76d3d6"} />
              <LandingButton text={"contact"} color={"#bd3e3e"} />
            </div>
          </div>
        </header>
        <ClipTransition path="0 0, 100% 0%, 100% 49%, 0% 100%" color="orange" />

        <section className="product-list-section">
          <p className="product-list-section-title">Popular Products</p>
          <ul className="product-list">
            {/* refactor later */}
            <ProductListItem img={product[0].img} title={product[0].title} price={product[0].price} id={product[0].id}/>
            <ProductListItem img={product[1].img} title={product[1].title} price={product[1].price} id={product[1].id}/>
            <ProductListItem img={product[2].img} title={product[2].title} price={product[2].price} id={product[2].id}/>
          </ul>
          <button className="product-list-item-add" id="shop-all-btn">
            Shop All &nbsp; <i class="fas fa-arrow-right"></i>
          </button>
        </section>
        <ClipTransition
          path="0 49%, 100% 0, 100% 100%, 0% 100%"
          color="orange"
        />
      </div>
    );
  }
}

{
  /* <button className="arrow-btn">
            <i class="fas fa-chevron-down"></i>
          </button> */
}
