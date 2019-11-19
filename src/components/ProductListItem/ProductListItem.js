import React, { Component } from "react";
import "./ProductListItem.css";

export default class ProductListItem extends Component {
  render() {
    const { img, title, price } = this.props;
    return (
      <li className="product-list-item">
        <img
          height="300"
          width="300"
          src={`/${img}`}
          className="product-list-item-img"
        ></img>
        <h2 className="product-list-item-title">{`${title}`}</h2>
        <span className="product-list-item-price">{`${price}`}</span>
        <button className="product-list-item-add">Add to cart</button>
      </li>
    );
  }
}
