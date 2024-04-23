import React from 'react';
import MoviesList from './MoviesList/MoviesList';

import './Movies.css';
import getAllMovies from '../Hooks/getAllMovies';

const Movies = () => {
    const filterFunction = item => {
        return item.name;
    };

    const { loading, error, filteredData, handleSearch, searchTerm } = getAllMovies(
        "https://api.tvmaze.com/shows",
        filterFunction
    );
    

    return (
        <article>
        <section className='search-container'>
        <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
        />
        </section>
        <h1>Lista de peliculas</h1>
        {loading ? (
            <p>Cargando...</p>
        ) : error ? (
            <p>Error: {error.message}</p>
        ) : (
            <MoviesList shows={filteredData} />
        )}
        </article>
    );
};

export default Movies;
