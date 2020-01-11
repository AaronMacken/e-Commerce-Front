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
      const res = await axios.get('/products/recent');
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
            <h2 className="header-sub">We are a CBD hemp dispensary located at <br />10418 North Main St. Suite-P Archdale, NC 27263</h2>

            <Link to="/Products" style={{ textDecoration: 'none' }}>
              <LandingButton text="See our products"></LandingButton>
            </Link>

          </div>
        </header>
        <ClipTransition path="0 0, 100% 0%, 100% 49%, 0% 100%" color="#5c9c55" />

        <section className="product-list-section">
          <Title text={'New Arrivals'} />

          <Items items={this.state.items} loading={this.state.isLoading} />


          <div className="shop-all-btn-wrapper">
            <Link to="/Products" style={{ textDecoration: 'none' }}>
              <LandingButton text="See our products"></LandingButton>
            </Link>
          </div>

        </section>
      </div>
    );
  }
}

