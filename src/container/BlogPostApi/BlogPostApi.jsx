import React, {Component, Fragment} from 'react';
import Post from '../../component/Post/Post';

class BlogPostApi extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post: json
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
