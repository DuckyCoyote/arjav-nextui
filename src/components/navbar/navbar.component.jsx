import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Tienda from '../../pages/tienda';

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tienda" element={<Tienda />}>
              Tienda
            </NavLink>
          </li>
          <li>
            <a href="/contact" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
