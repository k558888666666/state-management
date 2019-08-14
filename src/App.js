import React from 'react';
import './App.css';
import MoveList from './MovieList'
import Nav from './Nav'
import {MovieProvider} from './MovieContext'
import AddMovie from './AddMovies'
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <AddMovie/>
        <MoveList/>
      </div>
    </MovieProvider>
  );
}

export default App;
