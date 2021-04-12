import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routeMap from '../resources/routeMap';
import useAuth from '../hooks/useAuth';

const Nav = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const routeList = Object.values(routeMap);

  if (
    !routeList?.length ||
    !routeList.find((route) => location.pathname === route.path)?.isNavVisible
  ) {
    return null;
  }

  const renderLink = (route) => {
    if (!route.isNavVisible) {
      return null;
    }

    const isOpenedLink = location.pathname === route.path;

    return (
      <li className={isOpenedLink ? 'uk-disabled' : 'uk-active'} key={route.path}>
        <Link to={route.path}>{route.getName()}</Link>
      </li>
    );
  };

  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">{routeList.map(renderLink)}</ul>
      </div>
      <div className="uk-navbar-right logout-container">
        <div className="uk-text-left uk-text-bold">{user}</div>
        <button type="button" className="uk-button uk-button-default" onClick={logout}>
          Выход
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Nav);
