import React, { Component } from 'react';
import { GlobalConsumer } from '../../../../context/context';
class Counter extends Component{
  

    render(){
        console.log(this);
         return (
            <div className ="counter">
                <button className="minus" onClick={()=>this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                <input type="text" className="text-count" value={this.props.state.totalOrder} />
                <button className="plus" onClick={()=>this.props.dispatch({type: 'ADD_ORDER'})}>+</button>
            </div>
        )
    }
}

export default GlobalConsumer(Counter);