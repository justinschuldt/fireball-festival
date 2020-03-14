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
          <Link to="/schedule">Schedule</Link>
        </li>
        {/* <li>
          <Link to="/forms">Forms</Link>
        </li> */}
        <li>
          <Link to="/links">Links</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
