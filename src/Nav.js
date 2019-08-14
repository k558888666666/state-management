import React, {useContext} from 'react';
import './Nav.css';
import {MovieContext} from './MovieContext'
const Nav = () => {
    const [movies, setMoives] = useContext(MovieContext)
    return (
        <div className="nav">
            <h3>Nate Chen</h3>
            <p>The move pussies: {movies.length + 66} </p>
        </div>
    );
}

export default Nav;