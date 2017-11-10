import React from 'react';
import classNames from 'classnames';
import {urlContext} from '../../utils/config';

const Header = () => {
  const {pathname} = document.location;
  return (
    <nav className="header-nav">
      <a href='/home'
         className={classNames('header-nav-item', pathname.indexOf(`${urlContext}/home`) !== -1 ? 'active' : '')}>
        Home
      </a>
      <a href='/about'
         className={classNames('header-nav-item', pathname.indexOf(`${urlContext}/about`) !== -1 ? 'active' : '')}>
        About
      </a>
    </nav>
  );
};

export default Header;
