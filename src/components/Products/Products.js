import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default class Products extends Component {
  render() {
    return (
      <div>
          {/* creates an instance of stripe */}
        <StripeProvider apiKey="">
          <div className="example" style={{width: "100rem"}}>
            <h1>CBD Product</h1>
            {/* component creates an elements group */}
            <Elements> 
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}
