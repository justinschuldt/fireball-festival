import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://github.com/justinschuldt/fireball-festival">Source</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
