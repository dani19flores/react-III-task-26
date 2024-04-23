import React from 'react';
import "./MoviesList.css"

const MoviesList = ({ shows }) => {
    return (
        <section className='movies'>
            {shows.map(show => (
                <section className='movies-container-list'>
                    <h3 className='movies-title-movie' key={show.id}>{show.name}</h3>
                    <img src={show.image.medium}></img>
                </section>
            ))}
        </section>
    );
};

export default MoviesList;
