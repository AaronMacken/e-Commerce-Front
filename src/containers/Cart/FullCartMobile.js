import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import Checkout from '../Checkout/Checkout';
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import LandingButton from '../../components/LandingButton/LandingButton';

export default class FullCartMobile extends Component {
    render() {
        return (
            <div className="cart-page">
                <Title text={"Shopping Cart"} />
                <div className="cart-col-wrapper">
                    {/* RIGHT SIDE COLUMN */}
                    <div className="cart-col-right">{this.props.cartItems}</div>
                    <div className="cart-col even">
                        {/* LEFT TOP */}
                        <div className="col-left-top">
                            {/* display data */}
                            <h2 className="sub-total">Order</h2>
                            <ul className="cart-items-list">
                                {this.props.checkoutItems}
                                {this.props.shippingFeeComponent}
                            </ul>
                        </div>
                    </div>
                    {/* LEFT BOTTOM */}
                    <div className="col-left-bottom">
                        <h2 className="sub-total">
                            {/* Display total, round deciaml */}
                            Total: $ {this.props.total}
                        </h2>
                        {/* Integrating from Stripe to Square - Checkout component will be replaced by a modal opener to inform buyers */}
                        {/* <Checkout
                            stripeKey="pk_test_VkrWbkMQcpSVIJNdi7WNytR100X1frIfAN"
                            amount={this.props.amount}
                            data={this.props.data}
                            name={this.props.name}
                        /> */}
                        <div onClick={this.props.openModal}>
                            <LandingButton text="Pay With Card" />
                        </div>
                        <ModalComponent isOpenModal={this.props.isOpenModal} closeModal={this.props.closeModal} />
                    </div>
                </div>
            </div>
        )
    }
}
