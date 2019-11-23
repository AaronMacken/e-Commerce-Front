import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
    render() {
        const { title, price, img } = this.props;
        return (
            <div className="cart-item">
                <h4 className="cart-item-close" onClick={() => console.log('Clicked')}>X</h4>
                <img className="cart-item-img"
                    src={`/${img}`}></img>
                <div className="cart-item-col">
                    <h2>{title}</h2>
                    <h3>${price}</h3>
                </div>
            </div>
        )
    }
}

export default CartItem;
