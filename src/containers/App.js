import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Main from "../containers/Main/Main";
import Footer from "../components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

const appStyle = {
  minHeight: "100vh",
  position: "relative"
};


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" style={appStyle}>
            <Navbar />
            <Main />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
