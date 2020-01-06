import React, { Component } from "react";
import "./Home.css";
import ClipTransition from "../ClipTransition/ClipTransition";
import LandingButton from "../LandingButton/LandingButton";
import ProductListItem from "../ProductListItem/ProductListItem";
import Title from '../Title/Title';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

export default class Landing extends Component {
  static defaultProps = {
    popularProducts: [
      {
        img: "prod1.jpg",
        title: "Sun State Pain Cream 250mg",
        price: 34.99,
        id: 1
      },
      {
        img: "prod2.jpg",
        title: "Hemp Bomb Pain Freeze Gel 50mg",
        price: 14.99,
        id: 2
      },
      {
        img: "prod3.jpg",
        title: "Koi Hand & Body Lotion - Lavender - 4.25oz, 200mg",
        price: 44.99,
        id: 3
      }
    ]
  };

  render() {

    const product = this.props.popularProducts;

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
          <Title text={'Popular Products'} />

          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <ProductListItem img={product[0].img} title={product[0].title} price={product[0].price} id={product[0].id} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ProductListItem img={product[1].img} title={product[1].title} price={product[1].price} id={product[1].id} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ProductListItem img={product[2].img} title={product[2].title} price={product[2].price} id={product[2].id} />
            </Grid>
          </Grid>



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

