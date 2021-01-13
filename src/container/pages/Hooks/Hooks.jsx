import React, { Component, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <p className="ml-5 mt-5">Nilai : {this.state.count}</p>
//                 <Button variant="success" className="ml-5" onClick={this.onUpdate}>Update Nilai</Button>
//             </div>
//         )
//     }
// }

const Hooks = (props) => {
    const [count, setCount] = useState(1);
    return(
        <div>
            <p className="ml-5 mt-5">Nilai : {count}</p>
            <Button variant="success" className="ml-5" onClick={() => setCount(count + 1)}>Update Nilai</Button>
        </div>
    )
}

export default Hooks;