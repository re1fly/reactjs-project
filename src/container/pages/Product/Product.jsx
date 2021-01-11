import React, { Component, Fragment } from 'react';
import CartProduct from './CartProduct/CartProduct';
import './Product.scss';
// import {connect} from 'react-redux';
import {RootContext} from '../../Home/Home';

class Product extends Component {

    // state = {
    //     order: 5
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <Fragment>
                                <h2>Product Page </h2>
                                <hr />
                                <div className="header">
                                    <div className="logo">
                                        <img src="https://www.globalxtreme.net/images/gx-logo.png" alt="logo-img"/>
                                    </div>
                                    <div className="cart">
                                        <img src="https://www.svgrepo.com/show/178155/shopping-cart-commerce.svg" alt="cart-img" />
                                        <div className="count">{value.state.totalOrder}</div>
                                    </div>
                                </div>
                                <CartProduct />
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
            
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default Product;