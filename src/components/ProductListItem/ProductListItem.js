import React, { Component } from "react";
import QtySelector from "../../components/QtySelector/QtySelector";
import "./ProductListItem.css";
import { addItem } from "../../store/actions/itemActions";
import { connect } from "react-redux";

class ProductListItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    // payload for redux when adding items to state
    const payload = { 
      data: {
        title: this.props.title,
        price: this.props.price,
        id: this.props.id,
        img: this.props.img
      }
    }
    this.props.addItem(payload);
  }
  
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
        <span className="product-list-item-price">{`$${price}`}</span>


        <QtySelector />

        <button className="product-list-item-add" onClick={this.addToCart}>
          Add to cart
        </button>
      </li>
    );
  }
}

export default connect(null, { addItem })(ProductListItem);
