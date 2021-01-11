//libraries
import React, { Component, Fragment, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//pages
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import BlogPostApi from '../pages/BlogPostApi/BlogPostApi';
import HomeComponentPage from '../pages/HomeComponentPage/HomeComponentPage';
import DetailPost from '../pages/BlogPostApi/DetailPost/DetailPost';

//style
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const RootContext = createContext();
const Provider = RootContext.Provider; //untuk menyimpan state secara global dalam context

class Home extends Component {
    state = {
        totalOrder: 12
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
            <Router>
                <Provider value={this.state}>
                    <Fragment>
                        <Card.Body>
                            <Link to="/"><Button className="m-3" variant="outline-primary">Blog Post API Page</Button></Link>
                            <Link to="/product"><Button className="m-3" variant="outline-secondary">Product Page</Button></Link>
                            <Link to="/lifecycle"><Button className="m-3" variant="outline-info">LifeCycle Page</Button></Link>
                            <Link to="/home-component"><Button className="m-3" variant="outline-info">Movie</Button></Link>
                        </Card.Body>
                        <Route path="/" exact component={BlogPostApi} />
                        <Route path="/detail-post/:postID" component={DetailPost} />
                        <Route path="/product" component={Product} />
                        <Route path="/lifecycle" component={LifeCycleComp} />
                        <Route path="/home-component" component={HomeComponentPage} />
                    </Fragment>
                </Provider>
            </Router>
        )
    }
}


export default Home
