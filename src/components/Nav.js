import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav class="main-nav">
    <ul>
      <li>
        <NavLink to={'/rome'}>Rome</NavLink>
      </li>
      <li>
        <NavLink to={'/florence'}>Florence</NavLink>
      </li>
      <li>
        <NavLink to={'/venice'}>Venice</NavLink>
      </li>
      <li>
        <NavLink to={'/naples'}>Naples</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
