import React from 'react'
import Search from '../Search'
import MovieList from '../MovieList'
import './style.css'

function Movies() {
 return(
     <div className='movie-wrapper'>
         <Search />
         <MovieList />

     </div>
 )
}

export default Movies