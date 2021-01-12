import React, { Component, Fragment } from 'react';
import { GlobalConsumer } from '../../../context/context';
import CartProduct from './CartProduct/CartProduct';
import './Product.scss';
// import {connect} from 'react-redux';

class Product extends Component {

    render(){
        return(
            <Fragment>
                <h2>Product Page </h2>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://www.globalxtreme.net/images/gx-logo.png" alt="logo-img"/>
                    </div>
                    <div className="cart">
                        <img src="https://www.svgrepo.com/show/178155/shopping-cart-commerce.svg" alt="cart-img" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CartProduct />
            </Fragment>
        );
    }
}

export default GlobalConsumer(Product);