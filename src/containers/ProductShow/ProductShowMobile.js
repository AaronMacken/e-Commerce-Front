import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ProductShowMobile.css';
import { Link } from 'react-router-dom';
import '../../components/QtySelector/QtySelector';
import QtySelector from '../../components/QtySelector/QtySelector';

export default class ProductShowMobile extends Component {
    render() {
        return (
            <Grid container spacing={3}>

                <Grid item className="image-col image-col-mb">
                    <img className="image-ps-mobile" src="https://images.unsplash.com/photo-1580213845018-b9344d58d7cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
                </Grid>

                <Grid item xs={12}>
                    <div className="data-col-mb">
                        <div className="data-div-1">
                            <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                            <p>$49.99</p>

                            <p className="description-ps">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <div style={{ marginBottom: "2rem" }}>
                                <QtySelector />
                            </div>

                            <div className="button-col-ps-st button-col-ps-st-mb" className="ps-add">
                                <button className="green-btn" style={{ margin: '0', marginBottom: "2rem", width: "70vw" }} onClick={this.addToCart}>
                                    Add to cart
                                </button>
                            </div>
                            <Link to="/Products" style={{ textDecoration: 'none', marginBottom: "2rem" }}>
                                <button className="green-btn green-btn-inverse-mb" style={{ width: "70vw" }}>See our products</button>
                            </Link>
                        </div>
                    </div>
                </Grid>





            </Grid>

        )
    }
}
