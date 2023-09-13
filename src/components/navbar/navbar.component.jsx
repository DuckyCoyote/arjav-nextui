import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

export default function NavBar() {
  return (
    <nav>
      <ul className="text-black font-bold text-2xl flex flex-row gap-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tienda">Tienda</NavLink>
        </li>
        <li>
          <NavLink to="/nosotros">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/">
            <FontAwesomeIcon className='bg-white' icon={faStar} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
