import React from 'react'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import MovieContext from '../stores/MovieContext'
import { Routes, Route, NavLink } from "react-router-dom";
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';


const NavBarMenu = () => {
  const {movieGenre,setMovieGenre} = useContext(MovieContext);
  const {apiUrl,setApiUrl} = useContext(MovieContext);
  const {getAllMovies} = useContext(MovieContext);
  const {toggle, setToggle}= useContext(MovieContext);
  const [active, setActive]=useState();
  const {menus}= useContext(MovieContext);
  const {selectedMenuItem, setselectedMenuItem} = useContext(MovieContext);
 

  return (
    <>
    <div className="App">
        <nav className="ortala">
            <div className="appName">Movie App</div>
            <ul>
 
              { menus.map((val, index) => (
                <li key={index} className={active === val.id ? "aktif" : "pasif"}
                   onClick={() => {
                    setActive(val.id);
                    setToggle(true);
                    setApiUrl(menus[val.id-1].apiUrl);
                    console.log(apiUrl)
                    setselectedMenuItem(val.text)
                    getAllMovies();
                    
                  }}
                  >
                  {val.text}  
                </li>
              ))}
      </ul>

        </nav>
    </div>
 



    </>
  )
}

export default NavBarMenu