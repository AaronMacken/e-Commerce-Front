import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { connect } from "react-redux";

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    // example redux state
    this.state = {
      productData: {
        exampleReduxAmount: 20.99,
        exampleReduxNames: [`CBD Oil`, `CBD Edibles`]
      }
    };
    this.onToken = this.onToken.bind(this);
  }

  // to get the value from this request, convert to async await syntax
  async onToken(token, addresses) {
    // send with the axios post the token (which includes all address data)
    // and product data coming from redux state
    // await the post request to assign the value of that to a variable
    const response = await axios.post("/charge", {
      token,
      productData: this.state.productData
    });
    // get status from that request (being returned from server side code)
    const { status } = response.data;
    if (status === "success") {
      toast("Success! Check email for details.", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  // takes redux state and creates a single string with all array values of selected products
  createDescriptionString(arrToCombine) {
    return arrToCombine.join(", ");
  }

  createFinalOrder(state) {
    // filter duplicate names
    state.forEach(e => {
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        <StripeCheckout
          stripeKey="" // stripe pk here
          token={this.onToken}
          billingAddress
          shippingAddress
          // multiply dollar amounts by 100 to convert to cents
          amount={this.state.productData.exampleReduxAmount * 100}
          name={this.createDescriptionString(
            this.state.productData.exampleReduxNames
          )}
        />
        <button onClick={() => this.createFinalOrder(this.props.checkoutItems)}>Test</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  checkoutItems: state.checkoutItems.items
});

export default connect(mapStateToProps, null)(Checkout);
