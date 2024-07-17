import React from 'react'
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
      <header>
          <nav> <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="catalog" >
          Catalog
        </NavLink>
        <NavLink to="favorite" >
          Favorite
        </NavLink></nav>
    </header>
  )
}



export default AppBar