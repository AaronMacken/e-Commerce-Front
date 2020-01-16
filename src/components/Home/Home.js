import React, { Component } from "react";
import "./Home.css";
import ClipTransition from "../ClipTransition/ClipTransition";
import LandingButton from "../LandingButton/LandingButton";
import Title from '../Title/Title';
import { Link } from "react-router-dom";
import Items from '../../containers/Products/Items';
import axios from 'axios';

export default class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      items: []
    }
  }

  componentDidMount() {
    const fetchPosts = async () => {
      this.setState({ isLoading: true })
<<<<<<< HEAD
      const res = await axios.get('/api/products/recent');
=======
      const res = await axios.get('/products/recent');
>>>>>>> d9727f6be83b826e80a1fdd6defc7efd726fa700
      this.setState({ items: res.data })
      this.setState({ isLoading: false })
    }
    fetchPosts();
  }

  render() {
    return (
      <div className="landingPage">
        <header className="header">
          <div className="landing-col">
            <h1 className="header-title">The Hippie House</h1>
            <h2 className="header-sub">We are a CBD hemp dispensary located in Archdale and Greensboro, NC.
              <br></br>Shop online for in-store pickup.
            </h2>

            <Link to="/Products" style={{ textDecoration: 'none' }}>
              <LandingButton text="See our products"></LandingButton>
            </Link>

          </div>
        </header>
        <ClipTransition path="0 0, 100% 0%, 100% 30%, 0 82%" color="#5c9c55" />

        <section className="product-list-section">
          <Title text={'New Arrivals'} />

          <Items items={this.state.items} loading={this.state.isLoading} />


          <div className="shop-all-btn-wrapper mb-5 mt-5">
            <Link to="/Products" style={{ textDecoration: 'none' }}>
              <LandingButton text="See our products"></LandingButton>
            </Link>
          </div>

        </section>
      </div>
    );
  }
}

