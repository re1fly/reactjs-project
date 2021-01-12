import React, {Component, Fragment} from 'react';
import Post from '../../../component/Post/Post';
import axios from 'axios';
import { Button, Card, Form } from 'react-bootstrap';
import API from '../../../services';


class BlogPostApi extends Component {
    state = {
        post: [],
        formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
        },
        isUpdate: false,
        comments: []
    }


    getPostAPI = () => {
        API.getBlog().then(response => {
            this.setState({
                post: response
            })
        })
        API.getComments().then(response => {
            this.setState({
                comments: response
            })
        })
    }

    postDataToApi = () => {
        API.postBlog(this.state.formBlogPost).then(response => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    userId: 1,
                    id: 1,
                    title: '',
                    body: ''
                },
            })
        })
    }

    putDatatoApi = () => {
        API.updateBlog(this.state.formBlogPost, this.state.formBlogPost.id).then(response => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    userId: 1,
                    id: 1,
                    title: '',
                    body: ''
                },
            })
        })
    }

    handleDelete = (data) =>{
        API.deleteBlog(data).then(res => {
            this.getPostAPI();
        })
    }

    handleUpdate = (data) =>{
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        // console.log('form was change', event.target)
        let newFormBlogPost = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            newFormBlogPost['id'] = timestamp;
        }
        newFormBlogPost[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: newFormBlogPost
        })

    }
  
    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDatatoApi();
        }else{
            this.postDataToApi();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    componentDidMount() {
        this.getPostAPI()
    }
    render() {
        return (
            <Fragment>
            <h2>Blog Post API Page</h2>
            <hr />
                <Card style={{ width: '40%' }}>
                    <Card.Header className="text-center font-weight-bold" >Insert Data</Card.Header>
                    <Card.Body>
                <Form>
                <Form.Group controlId="formGroupTitle">
                    <Form.Label >Title</Form.Label>
                    <Form.Control type="text" value={this.state.formBlogPost.title} name="title" placeholder="Enter Title" onChange={this.handleFormChange} />
                </Form.Group>
                <Form.Group controlId="formGroupDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" value={this.state.formBlogPost.body} name="body" placeholder="Add Description" onChange={this.handleFormChange} />
                </Form.Group>
                <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
                </Form>
                </Card.Body>
                </Card><br />
                {/* {
                    this.state.comments.map(comment => {
                    return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map( post => {
                       return <Post key={post.id} data={post} delete={this.handleDelete} update={this.handleUpdate} detail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPostApi;
