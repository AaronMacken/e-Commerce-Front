import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import "./Checkout.css";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }

  // to get the value from this request, convert to async await syntax
  async onToken(token, addresses) {
    // send with the axios post the token (which includes all address data)
    // and product data coming from redux state
    // await the post request to assign the value of that to a variable

    const cartPayload = {
      orderString: this.getOrderString(this.props.checkoutItems),
      totalPrice: this.getOrderPrice(this.props.checkoutItems)
    };
    
    const response = await axios.post("/charge", {
      token,
      checkoutItems: cartPayload
    });

    const { status } = response.data;
    if (status === 'success') {
      console.log('success')
    } else {
      console.log('failure');
    }
  }

  // =================================================================================================

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
    return (
      <div className="checkout-wrapper">
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



        <div className="col-left-bottom">
          <h2 className="sub-total">
            {/* Display total, round deciaml */}
            SubTotal: ${this.getOrderPrice(this.props.checkoutItems).toFixed(2)}
          </h2>

          {/* Stripe component that sends data to back end using methods combined with redux state */}
          <StripeCheckout
            stripeKey="" // stripe pk here
            token={this.onToken}
            billingAddress
            shippingAddress
            // multiply dollar amounts by 100 to convert to cents
            amount={this.getOrderPrice(this.props.checkoutItems) * 100}
            name={this.getOrderString(this.props.checkoutItems)}
          />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  checkoutItems: state.checkoutItems.items
});

export default connect(mapStateToProps, null)(Checkout);
