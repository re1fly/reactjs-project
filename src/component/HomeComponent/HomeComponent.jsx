import React from 'react';
import './HomeComponent.scss';

const HomeComponent = (props) => {
    return (
            <div className="movie-wrapper">
                <div className="img-thumb">
                    <img src="https://tvguide1.cbsistatic.com/i/r/2020/07/22/f3e31084-697d-440c-9d44-3874e01015ed/thumbnail/600x337/93af3760f7252c39c6da452dbcd32e75/lucifer-poster.jpg" />
                </div>
                <p className="title">{props.title} ({props.duration})</p>
                <p className="genre">Crime</p>
                <p className="description">{props.description}</p>
            </div>
    )
}

HomeComponent.defaultProps = {
    title: 'Movie',
    duration: 'No Duration',
    genre: 'Unavailable',
    description: 'No Description'
}

export default HomeComponent;
