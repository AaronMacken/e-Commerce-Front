import React, { Component } from "react";
import "./CartItem.css";
import CloseBtn from '../../components/CloseBtn/CloseBtn';
import { connect } from "react-redux";
import { removeItem } from "../../store/actions/itemActions";

class CartItem extends Component {
  constructor(props) {
    super(props)
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  
  // calls action from props that removes an index from the array
  removeFromCart() {
    this.props.removeItem(this.props.index);
  }


  render() {
    const { title, price, img, index } = this.props;
    return (
      <div className="cart-item" key={index}>
        <CloseBtn className="cart-item-close" onClick={this.removeFromCart}>
          X
        </CloseBtn>
        <img className="cart-item-img" src={`/${img}`}></img>
        <div className="cart-item-col">
          <h2>{title}</h2>
          <h3>${price}</h3>
        </div>
      </div>
    );
  }
}

export default connect(null, { removeItem })(CartItem);
