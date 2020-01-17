import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import Title from "../../components/Title/Title";
import LandingButton from "../../components/LandingButton/LandingButton";
import ShippingFee from './ShippingFee';
import "./Cart.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDesktop: false
    };

    this.updatePredicate = this.updatePredicate.bind(this); 
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 975 });
  }


  getOrderString(reduxState) {
    let orderItems = reduxState.map((item, index) => {
      return `${item.title} x${item.qty}`;
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

  getTotal(subTotal) {
    if(subTotal >= 60) {
      return subTotal
    } else {
      return (this.getOrderPrice(this.props.checkoutItems) + 12.50).toFixed(2)
    }
  }

  getOrderData(reduxState) {
    let dataArray = reduxState.map(e => {
      return {id: e.id, qty: e.qty}
    })
    return dataArray;
  }

  render() {
    const isDesktop = this.state.isDesktop;
    // CART ITEMS FROM REDUX STATE
    let cartItems = this.props.checkoutItems.map((item, index) => (
      <CartItem
        title={item.title}
        price={item.price}
        img={item.img}
        index={index}
        id={item.id}
        key={index}
        qty={item.qty}
      />
    ));

    let shippingFeeComponent = (this.getOrderPrice(this.props.checkoutItems).toFixed(2) >= 60 ? ( <ShippingFee wavedShipping />) : ( <ShippingFee /> ))

    let emptyCartComponentBig = (
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

    let emptyCartComponentSmall = (
      <div className="cart-page">
        <Title text={"Shopping Cart"} />
        <div className="cart-col-wrapper">
          <div className="cart-col-small">
            <h2>Cart is empty</h2>
          </div>
          <div className="cart-col-small">
            <Link to="/Products" style={{ textDecoration: "none" }}>
              <LandingButton text="See our products"></LandingButton>
            </Link>
          </div>
        </div>
      </div>
    );

    let fullCartComponentBig = (
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
                {shippingFeeComponent}
              </ul>
            </div>

            {/* LEFT BOTTOM */}
            <div className="col-left-bottom">
              <h2 className="sub-total">
                {/* Display total, round deciaml */}
                Total: $
                {this.getTotal(this.getOrderPrice(this.props.checkoutItems).toFixed(2))}
              </h2>
              <Checkout
                stripeKey="pk_test_VkrWbkMQcpSVIJNdi7WNytR100X1frIfAN"
                amount={this.getTotal(this.getOrderPrice(this.props.checkoutItems))}
                data={this.getOrderData(this.props.checkoutItems)}
                name={this.getOrderString(this.props.checkoutItems)}
              />
              
            </div>
          </div>

          {/* RIGHT SIDE COLUMN */}
          <div className="cart-col-right">{cartItems}</div>
        </div>
      </div>
    );

    let fullCartComponentSmall = (
      <div className="cart-page">
        <Title text={"Shopping Cart"} />
        <div className="cart-col-wrapper">
          {/* RIGHT SIDE COLUMN */}
          <div className="cart-col-right">{cartItems}</div>
          <div className="cart-col even">
            {/* LEFT TOP */}
            <div className="col-left-top">
              {/* display data */}
              <h2 className="sub-total">Order</h2>
              <ul className="cart-items-list">
                {this.props.checkoutItems.map((item, index) => {
                  return (
                    <li key={index} key={index} className="cart-item-li">
                      {item.title} x{item.qty}
                    </li>
                  );
                })}
                {shippingFeeComponent}
              </ul>
            </div>
          </div>
          {/* LEFT BOTTOM */}
          <div className="col-left-bottom">
            <h2 className="sub-total">
              {/* Display total, round deciaml */}
              Total: $
              {this.getTotal(this.getOrderPrice(this.props.checkoutItems).toFixed(2))}
            </h2>
            <Checkout
              stripeKey="pk_test_VkrWbkMQcpSVIJNdi7WNytR100X1frIfAN"
              amount={this.getTotal(this.getOrderPrice(this.props.checkoutItems))}
              data={this.getOrderData(this.props.checkoutItems)}
              name={this.getOrderString(this.props.checkoutItems)}
            />
          </div>
        </div>
      </div>
    );

    if (isDesktop) {
      if (this.props.checkoutItems.length < 1) {
        return emptyCartComponentBig;
      } else {
        return fullCartComponentBig;
      }
    } else {
      if (this.props.checkoutItems.length < 1) {
        return emptyCartComponentSmall;
      } else {
        return fullCartComponentSmall;
      }
    }
  }
}

const mapStateToProps = state => ({
  checkoutItems: state.checkoutItems.items
});

export default connect(mapStateToProps, null)(Cart);
