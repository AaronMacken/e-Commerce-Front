import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import Title from "../../components/Title/Title";
import LandingButton from "../../components/LandingButton/LandingButton";
import "./Cart.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

class Cart extends Component {
  getOrderString(reduxState) {
    let orderItems = reduxState.map((item, index) => {
      return `${item.title} x${item.qty}`
    });
    return orderItems.join(", ");
  }

  getOrderPrice(reduxState) {
    let subTotal = 0;
    reduxState.forEach(item => {
      subTotal += item.qty * item.price;
    });
    return subTotal;
  }

  render() {
    // CART ITEMS FROM REDUX STATE
    let cartItems = this.props.checkoutItems.map((item, index) => (
      <CartItem
        title={item.title}
        price={item.price}
        img={item.img}
        index={index}
        id={item.id}
        qty={item.qty}
      />
    ));

    // ------------------------------ RENDER EMPTY CART COMPONENT ------------------------- //
    if (this.props.checkoutItems.length < 1) {
      return (
        <div className="cart-page">
          <Title text={"Shopping Cart"} />
          <div className="cart-col-wrapper">
            <div className="cart-col">
              <h2>Cart is empty</h2>
            </div>
            <div className="cart-col">
              <Link to="/Products" style={{ textDecoration: "none" }}>
                <LandingButton text="See our products"></LandingButton>
              </Link>
            </div>
          </div>
        </div>
      );
      
      // ------------------------------- RENDER FULL CART COMPONENT --------------------------- //
    } else {
      return (
        <div className="cart-page">
          <Title text={"Shopping Cart"} />
          <div className="cart-col-wrapper">
            <div className="cart-col even">
              {/* LEFT TOP */}
              <div className="col-left-top">
                {/* display data */}
                <h2 className="sub-total">Order</h2>
                <ul className="cart-items-list">
                  {this.props.checkoutItems.map((item, index) => {
                    return (
                      <li key={index} className="cart-item-li">
                        {item.title} x{item.qty}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* LEFT BOTTOM */}
              <div className="col-left-bottom">
                <h2 className="sub-total">
                  {/* Display total, round deciaml */}
                  SubTotal: $
                  {this.getOrderPrice(this.props.checkoutItems).toFixed(2)}
                </h2>
                <Checkout
                  stripeKey='pk_test_VkrWbkMQcpSVIJNdi7WNytR100X1frIfAN'
                  amount={this.getOrderPrice(this.props.checkoutItems)}
                  name={this.getOrderString(this.props.checkoutItems)}
                />
              </div>
            </div>

            {/* RIGHT SIDE COLUMN */}
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
