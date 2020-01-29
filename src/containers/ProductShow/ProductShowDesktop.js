import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ProductShowDesktop.css';
import { Link } from 'react-router-dom';
import '../../components/QtySelector/QtySelector';
import QtySelector from '../../components/QtySelector/QtySelector';

export default class ProductShowDesktop extends Component {
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} className="image-col">
                    <img className="image-ps" src={`${this.props.img}`}></img>
                    <Link to="/Products" style={{ textDecoration: 'none', marginBottom: "2rem" }}>
                        <button className="green-btn green-btn-inverse-mb" style={{ margin: 0, width: "40rem" }}>See our products</button>
                    </Link>
                </Grid>

                <Grid item sm={6}>
                    <div className="data-col">
                        <div className="data-div-1">
                            <h1>{`${this.props.title}`}</h1>
                            <p>{`$${this.props.price.toFixed(2)}`}</p>

                            <p className="description-ps">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <div style={{ marginBottom: "2rem" }}>
                                <QtySelector />
                            </div>

                            <div className="button-col-ps-st">
                                <button className="green-btn" style={{ margin: '0', marginBottom: "2rem", width: "40rem" }} onClick={this.addToCart}>
                                    Add to cart
                            </button>
                            </div>
                        </div>
                    </div>
                </Grid>

            </Grid>

        )
    }
}
