import React, { Component } from "react";
import "./ProductListItem.css";
import "../QtySelector/QtySelector";
import { addItem } from "../../store/actions/itemActions";
import { connect } from "react-redux";

class ProductListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfItems: 1
    };
    this.addToCart = this.addToCart.bind(this);
    this.handleInputIncrement = this.handleInputIncrement.bind(this);
    this.handleInputDecrement = this.handleInputDecrement.bind(this);
  }

  handleInputIncrement(event) {
    this.setState({ numberOfItems: this.state.numberOfItems + 1 });
  }

  handleInputDecrement(event) {
    this.setState({ numberOfItems: this.state.numberOfItems - 1 });
    if (this.state.numberOfItems < 2) {
      this.setState({ numberOfItems: 1 });
    }
  }

  addToCart() {
    // payload for redux when adding items to state
    const payload = {
      title: this.props.title,
      price: this.props.price,
      id: this.props.id,
      img: this.props.img,
      qty: this.state.numberOfItems
    };
    this.props.addItem(payload);
  }

  render() {
    const { img, title, price, id } = this.props;
    return (
      <li className="product-list-item" id={id}>
        <img
<<<<<<< HEAD
          src={`https://hippie-server-am.herokuapp.com/${img}`}
=======
          src={`http://localhost:3001/${img}`}
>>>>>>> d9727f6be83b826e80a1fdd6defc7efd726fa700
          alt={title}
          className="product-list-item-img"
        ></img>
        <h2 className="product-list-item-title">{`${title}`}</h2>
        <span className="product-list-item-price">{`$${price.toFixed(2)}`}</span>

        {/* <QtySelector /> */}
        <div className="qty-selector-wrapper">
          <button
            className="decrement counter-btn"
            onClick={this.handleInputDecrement}
          >
            -
          </button>

          <input
            type="number"
            placeholder="Qty"
            readOnly
            className="qty-input"
            value={this.state.numberOfItems}
          ></input>

          <button
            className="increment counter-btn"
            onClick={this.handleInputIncrement}
          >
            +
          </button>
        </div>
        <button className="product-list-item-add" onClick={this.addToCart}>
          Add to cart
        </button>
      </li>
    );
  }
}

export default connect(null, { addItem })(ProductListItem);
