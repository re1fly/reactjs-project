import React, {Component} from 'react';


class LifeCycleComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("ComponentDidMount")
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    render(){
        console.log("render");  
        return(
            <button className="btn">Component Button</button>
        )
    }
}

export default LifeCycleComp;
