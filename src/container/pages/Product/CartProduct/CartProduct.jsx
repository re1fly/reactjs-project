import React, { Component } from 'react';

class CartProduct extends Component {

    state = {
        order: 5
    }

    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue);
    }

    handlePlus = () =>{
        this.setState({
            order : this.state.order + 1
        }, () =>{
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () =>{
        if(this.state.order > 0){
            this.setState({
                order : this.state.order - 1
            }, () =>{
            this.handleCounterChange(this.state.order);
            })
        }
    }

    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://media-exp1.licdn.com/dms/image/C510BAQECOlh6nhpn2g/company-logo_200_200/0/1581156538031?e=2159024400&v=beta&t=Mmci1LUyVmN0cFbn0XgV2T3JaSwWXjDIhlYcJPzGOMQ" alt="product_image" />
                    </div>
                    <p className="product-title">Voucher 1 Day WIFI GlobalXtreme</p>
                    <p className="product-price">Rp. 5.000,00</p>
                    <div className ="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" className="text-count" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CartProduct;