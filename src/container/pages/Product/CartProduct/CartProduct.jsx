import React, { Component } from 'react';
import Counter from './Counter';

class CartProduct extends Component {
    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://media-exp1.licdn.com/dms/image/C510BAQECOlh6nhpn2g/company-logo_200_200/0/1581156538031?e=2159024400&v=beta&t=Mmci1LUyVmN0cFbn0XgV2T3JaSwWXjDIhlYcJPzGOMQ" alt="product_image" />
                    </div>
                    <p className="product-title">Voucher 1 Day WIFI GlobalXtreme</p>
                    <p className="product-price">Rp. 5.000,00</p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)} />
                </div>
        );
    }
}

export default CartProduct;