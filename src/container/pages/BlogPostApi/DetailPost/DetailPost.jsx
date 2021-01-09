import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DetailPost extends Component {
    state= {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.postID)
        let id = this.props.match.params.postID
        axios.get(`http://localhost:3004/posts/${id}`).then(response => {
            console.log('response: ', response);
            let post = response.data;
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }
    render(){
        return(
            <CardColumns>
            <Card border="dark" style={{width: '400px'}}>
                <Card.Body className="text-center">
                    <div className="mb-3">
                        <img src="http://placeimg.com/200/150/tech" alt="dummy" />
                    </div>
                        <p className="data-title" >{this.state.post.title}</p>
                        <p className="desc">{this.state.post.body}</p>
                </Card.Body>
            </Card>
        </CardColumns>
        )
    }
}

export default DetailPost;