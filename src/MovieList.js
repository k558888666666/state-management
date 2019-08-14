import React, { useState, useContext } from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext'
const MovieList = () => {
    const [movies, setMoives] = useContext(MovieContext)
    return (
        <div>
            { movies.map(movie => (
                <Movie names = {movie.name} prices = {movie.price} key={movie.id}/>
            ))}
        </div>
    );
}

export default MovieList;