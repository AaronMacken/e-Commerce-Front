import React, { Component } from "react";
import Checkout from "../Checkout/Checkout";

export default class Products extends Component {
  render() {
    return (
      <div>
        <h1>Cool Product</h1>
        <h2>Price: $9.99</h2>
        <Checkout />
      </div>
    );
  }
}
