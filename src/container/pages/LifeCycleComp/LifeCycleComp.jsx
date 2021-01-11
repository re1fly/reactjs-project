import React, {Component, Fragment} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {RootContext} from '../../Home/Home'


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
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000);
    }

    shouldComponentUpdate(nextProps,  nextState){
        console.group("shouldComponentUpdate")
        // console.log("nextProps: ", nextProps);
        console.log("nextState: ", nextState);
        console.log("thisState: ", this.state);
        console.groupEnd();
        if(nextState.count > 5){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState){
        console.log("ComponentDidUpdate")
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    changeCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log("render");  
        return(
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <Fragment>
                                <h2>LifeCycle Page</h2>
                                <hr />
                                <Button variant="outline-primary" onClick={this.changeCount}>Component Button{this.state.count}</Button>
                                <hr />
                                <p>Total Order: {value.state.totalOrder}</p>
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
            
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(LifeCycleComp);
export default LifeCycleComp;
