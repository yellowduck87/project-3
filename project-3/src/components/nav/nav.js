import React, { Component } from 'react'

export const Nav = props => {
    <nav className='nav.navbar.navbar-expand-lg.navbar-dark bg-primary'>
      <a href='/' className='navbar-brand'>
      {props.children}
      </a>
    </nav>
  
  }
  
  export default Nav;