import React from 'react';
import './Nav.css';

function Nav(props) {
    return (
    <nav class="navbar navbar-light bg-light">
     <h2 class="nav-item" href="#">Pokemon Clicky Game</h2>
      <h3 class="nav-item">Current Score: {props.currentscore}</h3>
      <h3 class="nav-item">Top Score: {props.topscore}</h3>
    </nav>
    );
}

export default Nav;
