import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import Title from "../../components/Title/Title";
import LandingButton from "../../components/LandingButton/LandingButton";
import "./Cart.css";
import { Link } from 'react-router-dom';
import { removeAllItems } from "../../store/actions/itemActions";

class Cart extends Component {

  // Get unique array names along with the number of occurences
  getDisplayData(reduxState) {
    // create an array with each of the redux element strings
    let itemArray = reduxState.map(item => item.data.title);

    // create associative array object
    let newArr = {};

    // assign key value pairs to that object. 
    // Key being the array value and the value being the number of occurences
    itemArray.forEach(i => {
      newArr[i] = (newArr[i] || 0) + 1;
    });

    // create new array to store key value pairs from the associative array object
    let orderArr = [];
    for (let item in newArr) {
      orderArr.push(`${item} x${newArr[item]}`);
    }

    // return that array to be used for displaying data and sending data to back end
    return orderArr;
  }

  // use array returned from previous function along with the join method to create string to send to back end
  getOrderString(reduxState) {
    return this.getDisplayData(reduxState).join(", ");
  }

  // get order price fn
  // add all item prices to a total variable and return that var
  getOrderPrice(reduxState) {
    let total = 0;
    reduxState.forEach(item => {
      total += item.data.price;
    });
    return total;
  }

  render() {
    // CART ITEMS FROM REDUX STATE
    let cartItems = this.props.checkoutItems.map((item, index) => (
      <CartItem
        title={item.data.title}
        price={item.data.price}
        img={item.data.img}
        index={index}
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
              <Link to="/Products" style={{ textDecoration: 'none' }}>
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
                  {/* use getDisplayData function with map to return jsx elements of the returned array */}
                  {this.getDisplayData(this.props.checkoutItems).map((item, index) => {
                    return <li key={index} className="cart-item-li">{item}</li>;
                  })}
                </ul>
              </div>


              {/* LEFT BOTTOM */}
              <div className="col-left-bottom">
                <h2 className="sub-total">
                  {/* Display total, round deciaml */}
                  SubTotal: ${this.getOrderPrice(this.props.checkoutItems).toFixed(2)}
                </h2>
                <Checkout
                  stripeKey="sk_test_xm5QBDRNCYEYkHMdBUtBoZes00Opnn4Bvb"
                  amount={this.getOrderPrice(this.props.checkoutItems)}
                  name={this.getOrderString(this.props.checkoutItems)}
                />
                <button onClick={this.props.removeAllItems}>Test</button>
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

export default connect(mapStateToProps, { removeAllItems })(Cart);
