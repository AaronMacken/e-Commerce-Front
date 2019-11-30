import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import Title from "../../components/Title/Title";
import LandingButton from "../../components/LandingButton/LandingButton";
import "./Cart.css";

class Cart extends Component {
  render() {
    let cartItems = this.props.checkoutItems.map((item, index) => (
      <CartItem
        title={item.data.title}
        price={item.data.price}
        img={item.data.img}
        index={index}
      />
    ));
    if (this.props.checkoutItems.length < 1) {
      return (
        <div className="cart-page">
          <Title text={"Shopping Cart"} />
          <div className="cart-col-wrapper">
            <div className="cart-col">
              <h2>Cart is empty</h2>
            </div>
            <div className="cart-col">
              <a>
                <LandingButton text={"See our products"}></LandingButton>
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cart-page">
          <Title text={"Shopping Cart"} />
          <div className="cart-col-wrapper">
            <div className="cart-col">
              <Checkout />
            </div>
            <div className="cart-col-right">{cartItems}</div>
          </div>
        </div>
      );
    }
  }
}

// need to import redux state

const mapStateToProps = state => ({
  checkoutItems: state.checkoutItems.items
});

export default connect(mapStateToProps, null)(Cart);
