 //import { useEffect, useState } from 'react';


import './App.css';
 
 
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieContextProvider } from './stores/MovieContext';
import MovieList from './components/MovieList';
import NavBarMenu from './components/NavBarMenu';

 

function App() {
  return (
    <MovieContextProvider>
      <NavBarMenu />
    <MovieList/>
    </MovieContextProvider>
  );
}

export default App;
