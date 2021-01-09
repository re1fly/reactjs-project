import React from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap';
import './Post.scss';

const Post = (props) => {
    return (
        <CardColumns>
            <Card border="dark" style={{width: '400px'}}>
                <Card.Body className="text-center">
                    <div className="mb-3">
                        <img src="http://placeimg.com/200/150/tech" alt="dummy" />
                    </div>
                        <p className="data-title" onClick={() => props.detail(props.data.id)}>{props.data.title}</p>
                        <p className="desc">{props.data.body}</p>
                        <Button className='mr-4' variant="success" size="sm" onClick={() => props.update(props.data)} block>Update</Button>
                        <Button variant="danger" size="sm" onClick={() => props.delete(props.data.id)} block>Delete</Button>
                </Card.Body>
            </Card>
        </CardColumns>
    )
}

export default Post;
