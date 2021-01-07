import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = (props) => {
    return (
        <CardColumns>
            <Card border="dark" style={{width: '400px'}}>
                <Card.Header>
                    <Card.Title>
                        Data Dummy
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="img-thumb">
                        <img src="http://placeimg.com/200/150/tech" alt="dummy" />
                    </div>
                        <p className="font-weight-bold">{props.title}</p>
                        <p className="desc">{props.desc}</p>
                </Card.Body>
            </Card>
        </CardColumns>
    )
}

export default Post;
