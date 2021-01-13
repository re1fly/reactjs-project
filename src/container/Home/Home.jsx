//libraries
import React, { Component, Fragment, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalProvider from '../../context/context';

//pages
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import BlogPostApi from '../pages/BlogPostApi/BlogPostApi';
import HomeComponentPage from '../pages/HomeComponentPage/HomeComponentPage';
import DetailPost from '../pages/BlogPostApi/DetailPost/DetailPost';
import Hooks from '../pages/Hooks/Hooks';
import IndexForm from '../pages/FormHooks/IndexForm';

//style
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends Component {
    render() {
        return(
            <Router>
                    <Fragment>
                        <Card.Body>
                            <Link to="/"><Button className="m-3" variant="outline-info">Blog Post API Page</Button></Link>
                            <Link to="/product"><Button className="m-3" variant="outline-info">Product Page</Button></Link>
                            <Link to="/lifecycle"><Button className="m-3" variant="outline-info">LifeCycle Page</Button></Link>
                            <Link to="/home-component"><Button className="m-3" variant="outline-info">Movie</Button></Link>
                            <Link to="/hooks"><Button className="m-3" variant="outline-info">Hooks</Button></Link>
                            <Link to="/form"><Button className="m-3" variant="outline-info">Form</Button></Link>
                        </Card.Body>
                        <Route path="/" exact component={BlogPostApi} />
                        <Route path="/detail-post/:postID" component={DetailPost} />
                        <Route path="/product" component={Product} />
                        <Route path="/lifecycle" component={LifeCycleComp} />
                        <Route path="/home-component" component={HomeComponentPage} />
                        <Route path="/hooks" component={Hooks} />
                        <Route path="/form" component={IndexForm} />
                    </Fragment>
            </Router>
        )
    }
}


export default GlobalProvider(Home);
