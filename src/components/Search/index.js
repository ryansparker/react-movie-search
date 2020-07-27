import React from 'react'
import './style.css'

function Search() {
 return(
     <form className='search-form'>
          <label for="gsearch">Search:</label>
        <input type="search" id="gsearch" name="gsearch" />
     </form>
 )
}

export default Search