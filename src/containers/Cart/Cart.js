import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import Checkout from '../Checkout/Checkout';

class Cart extends Component {
    
  render() {
    const cartItems = this.props.checkoutItems.map((item, index) => (
        <CartItem  title={item.data.title} price={item.data.price} img={item.data.img}/>
    ));
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Cart Page</h1>
        {cartItems}
        <Checkout />
      </div>
    );
  }
}

// need to import redux state

const mapStateToProps = state => ({
  checkoutItems: state.checkoutItems.items
});

export default connect(mapStateToProps, null)(Cart);
