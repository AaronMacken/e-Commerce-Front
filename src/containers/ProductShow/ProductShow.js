import React, { Component } from 'react';
import ProductShowDesktop from './ProductShowDesktop';
import ProductShowMobile from './ProductShowMobile';
import axios from 'axios';
import SpinnerMUI from '../../components/SpinnerMUI/SpinnerMui';



export default class ProductShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDesktop: false,
            isLoading: false,
            productName: "",
            price: null,
            description: "",
            img: ""
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        const fetchProduct = async () => {
            this.setState({ isLoading: true })
            await axios.get(`/api/products/${this.props.match.params.product_id}`)
                .then(res => {
                    this.setState({
                        productName: res.data.title,
                        price: res.data.price,
                        description: res.data.description,
                        img: res.data.productImage
                    })
                    this.setState({ isLoading: false })
                })
                .catch(e => {
                    if(e) {
                        this.props.history.push('/Products');
                    }
                })

        }
        fetchProduct();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 959 });
    }


    render() {
        if (this.state.isLoading) {
            return <div style={{ minHeight: "50rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <SpinnerMUI />
            </div>
        } else {
            return (
                <div className="product-show-page">
                    {this.state.isDesktop
                        ?
                        <ProductShowDesktop
                            img={this.state.img}
                            title={this.state.productName}
                            price={this.state.price}
                            description={this.state.description}
                        />
                        :
                        <ProductShowMobile
                            img={this.state.img}
                            title={this.state.productName}
                            price={this.state.price}
                            description={this.state.description}
                        />}
                </div>
            )
        }

    }
}
