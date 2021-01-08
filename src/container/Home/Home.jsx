import React, { Component } from 'react';
import HomeComponent from '../../component/HomeComponent/HomeComponent';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Product from '../Product/Product';
import BlogPostApi from '../BlogPostApi/BlogPostApi';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Fragment } from 'react';

class Home extends Component {
    state = {
        showComponent: true
    }
    
    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 8000);
    }

    render() {
        return(
            <BrowserRouter>
            {/* <div>
                <p>Movie List</p>
                <hr />
            <HomeComponent />
            <HomeComponent
                title="Lucifer Season 1 Eps 2"
                duration="42.12"
                description="descript i on 2"/>
            <HomeComponent
                title="Lucifer Season 1 Eps 3"
                duration="39.04"
                description="description 3"/>
            <HomeComponent
                title="Lucifer Season 1 Eps 4"
                duration="41.02"
                description="description 4"/>
            <HomeComponent
                title="Lucifer Season 1 Eps 5"
                duration="46.24"
                description="description 5"/>
                <p>Product Counter</p>
                <hr/>
                <Product />
            <h2>Lifecycle</h2>
            <hr />
            {
                this.state.showComponent ? <LifeCycleComp /> : "Component unmounting"
            }
            <h2>Blog Post API </h2>
            <hr />
            <BlogPostApi />
            </div> */}
            <Fragment>
                <Route path="/" exact component={BlogPostApi} />
                <Route path="/product" component={Product} />
                <Route path="/lifecycle" component={LifeCycleComp} />
            </Fragment>
            </BrowserRouter>
        )
    }
}


export default Home
