import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create an expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;