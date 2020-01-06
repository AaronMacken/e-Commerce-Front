import React, { Component } from "react";
import Home from "../../components/Home/Home";
import ProductPage from "../Products/ProductPage";
import { Switch, Route} from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import Cart from "../Cart/Cart";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        {/* Render a component with the react router props */}
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/Products" render={props => <ProductPage {...props} />}/>
        <Route exact path="/Contact" render={props => <Contact {...props} />} />
        <Route exact path="/Cart" render={props => <Cart {...props} />} />
      </Switch>
    );
  }
}
