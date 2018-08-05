import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>home </NavLink>
        <NavLink to="/create" activeClassName="is-active">new </NavLink>
    </header>
);

export default Header;