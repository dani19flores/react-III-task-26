import React, { useState } from 'react';
import MoviesList from './MoviesList/MoviesList';

import {SearchContainer,SearchInput, AnimatedBox} from "./style";
import getAllMovies from '../Hooks/getAllMovies';

const Movies = () => {
    const [isFocused, setIsFocused] = useState(false);
    const filterFunction = item => {
        return item.name;
    };

    const { loading, error, filteredData, handleSearch, searchTerm } = getAllMovies(
        "https://api.tvmaze.com/shows",
        filterFunction
    );
    

    return (
        <article>
            <AnimatedBox/>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Buscar por nombre..."
                    isFocused={isFocused} 
                    onFocus={() => setIsFocused(true)} 
                    onBlur={() => setIsFocused(false)} 
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </SearchContainer>
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
