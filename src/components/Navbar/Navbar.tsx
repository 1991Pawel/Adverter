import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styled.nav}>
    <div className={styled.nav__container}>
      <ul className={styled.nav__list}>
        <li className={styled.nav__listitem}>
          <NavLink
            activeClassName={styled.nav__active}
            className={styled.nav__link}
            exact
            to="/"
          >
            Start
          </NavLink>
        </li>
        <li className={styled.nav__listitem}>
          <NavLink
            activeClassName={styled.nav__active}
            className={styled.nav__link}
            exact
            to="/adverts"
          >
            Ogłoszenia
          </NavLink>
        </li>
        <li className={styled.nav__listitem}>
          <NavLink
            activeClassName={styled.nav__active}
            className={styled.nav__link}
            exact
            to="/add"
          >
            Dodaj
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
