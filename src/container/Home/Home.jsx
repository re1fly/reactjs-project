import React, {Component} from 'react';
import HomeComponent from '../../component/HomeComponent/HomeComponent';
import Product from '../Product/Product';


class Home extends Component {
    render() {
        return(
            <div>
                <p>Movie List</p>
                <hr />
            <HomeComponent />
            <HomeComponent
                title="Lucifer Season 1 Eps 2"
                duration="42.12"
                description="description 2"/>
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
            </div>
        )
    }
}


export default Home
