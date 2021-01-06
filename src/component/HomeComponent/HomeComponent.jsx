import React from 'react';
import './HomeComponent.scss';

const HomeComponent = (props) => {
    return (
            <div className="movie-wrapper">
                <div className="img-thumb">
                    <img src="https://lh3.googleusercontent.com/proxy/eVVBiDzFnAz-wDa9wWwG9b3Rkv1rKl4XNnkQxKTcoLqsdwuHy3YzoyZhhOB7Cl-TtQFlpnY7h09e9SaCSRQLu9jICW7SGksEi6K2wXQ96doLItmMpRGAQidXtalG-THg4n9k" alt="" />
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
