import React from 'react';

const Movie = ({names, prices}) => {
    return (
        <div>
            <h3>{names}</h3>
            <p>{prices}</p>
        </div>
    );
}

export default Movie;