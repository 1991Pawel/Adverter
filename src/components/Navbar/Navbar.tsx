import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from './Navbar.module.scss';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
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
              {t('Start.1')}
            </NavLink>
          </li>
          <li className={styled.nav__listitem}>
            <NavLink
              activeClassName={styled.nav__active}
              className={styled.nav__link}
              exact
              to="/adverts"
            >
              {t('Adverts.1')}
            </NavLink>
          </li>
          <li className={styled.nav__listitem}>
            <NavLink
              activeClassName={styled.nav__active}
              className={styled.nav__link}
              exact
              to="/add"
            >
              {t('Add.1')}
            </NavLink>
          </li>
          <li className={styled.nav__listitem}>
            <button
              className={styled.nav__langbtn}
              onClick={() => handleClick('pl')}
              type="button"
            >
              PL
            </button>
          </li>
          <li className={styled.nav__listitem}>
            <button
              className={styled.nav__langbtn}
              onClick={() => handleClick('en')}
              type="button"
            >
              ENG
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
