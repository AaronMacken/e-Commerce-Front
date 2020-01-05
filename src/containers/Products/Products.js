import React, { Component } from "react";
import './Products.css';
import Title from '../../components/Title/Title';
import { connect } from 'react-redux';
import { fetchItems } from '../../store/actions/itemActions';
import ProductListItem from '../../components/ProductListItem/ProductListItem';
import Grid from '@material-ui/core/Grid';

class Products extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    let products = this.props.items.map((e) => (
      <Grid item xs={12} md={6} lg={4}>
        <ProductListItem img="https://hemp-xr.com/wp-content/uploads/2019/12/hemp-xr-oil.jpg"
          title={e.title} price={e.price} />
      </Grid>

    ))
    return (
      <div className="products-page">
        <Title text={'Products'} />
        <Grid container spacing={3}>
          {products}
        </Grid>

      </div>
    );
  }
}

// make messages held in state available as props
function mapStateToProps(state) {
  return {
    items: state.items
  };
}

export default connect(mapStateToProps, { fetchItems })(Products);