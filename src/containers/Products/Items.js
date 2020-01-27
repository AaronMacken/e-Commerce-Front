import React from 'react'
import ProductListItem from '../../components/ProductListItem/ProductListItem';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    spinner: {
        color: 'green'
    },
    containerGrid: {
        width: '100vw'
    }
})


const Items = ({ items, loading }) => {
    const classes = useStyles();
    let products = items.map((e) => (
        <Grid item xs={12} md={4} lg={4} key={e._id}>
            <ProductListItem img={e.productImage}
                title={e.title} price={e.price} id={e._id} />
        </Grid>
    ))
    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress size={100} className={classes.spinner}/>
        </div>

    }
    return (
        <Grid container spacing={3} className={classes.containerGrid}>
            {products}
        </Grid>
        
    )
}

export default Items;



