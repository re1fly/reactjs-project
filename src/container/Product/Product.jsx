import React, { Component, Fragment } from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Product.scss';

class Product extends Component {

    state = {
        order: 5
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://www.globalxtreme.net/images/gx-logo.png" alt="logo-img"/>
                    </div>
                    <div className="cart">
                        <img src="https://www.svgrepo.com/show/178155/shopping-cart-commerce.svg" alt="cart-img" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CartProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Product;