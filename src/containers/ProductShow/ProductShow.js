import React, { Component } from 'react';
import ProductShowDesktop from './ProductShowDesktop';
import ProductShowMobile from './ProductShowMobile';



export default class ProductShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDesktop: false,
            isLoading: false,
            productName: "",
            price: null,
            img: ""
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        // console.log(this.props.match.params.product_id);
        // const fetchProduct = async () => {
        //     this.setState({ isLoading: true })
        //     const res = await axios.get('/api/products/');
        //     this.setState({ items: res.data })
        //     this.setState({ isLoading: false })
        //   }
        //   fetchPosts();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 959 });
    }
    render() {
        return (
            <div className="product-show-page">
                {this.state.isDesktop ? <ProductShowDesktop /> : <ProductShowMobile />}
            </div>
        )
    }
}
