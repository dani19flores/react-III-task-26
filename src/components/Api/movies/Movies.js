import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesList from './MoviesList/MoviesList';

import './Movies.css';

const Movies = () => {
    const [shows, setShows] = useState([]);
    const [filteredShows, setFilteredShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const url = "https://api.tvmaze.com/shows";
                const response = await axios.get(url);
                setShows(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
            };
        
            fetchShows();
        }, []);
    
        useEffect(() => {
            const filtered = shows.filter(show =>
                show.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredShows(filtered);
        }, [shows, searchTerm]);
        
        const handleSearch = event => {
            setSearchTerm(event.target.value);
        };
        

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
            <MoviesList shows={filteredShows} />
        )}
        </article>
    );
};

export default Movies;
