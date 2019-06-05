import React from 'react';
import './Nav.css';

const Nav = props => (
<nav class="navbar navbar-light bg-light">
      <a href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
</nav>
);

export default Nav;
