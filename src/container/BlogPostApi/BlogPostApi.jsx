import React, {Component, Fragment} from 'react';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPostApi extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })]
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=> {
                console.log(response.data);
                this.setState({
                    post: response.data
                })
            })
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.post.map( post => {
                       return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPostApi;
