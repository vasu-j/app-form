import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = ()=> (
    <div className="header">
        <h1 className="header_title">Kasikorn Bank Social Loan Application</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home </NavLink>
        <NavLink to="/login" activeClassName="is-active">Login </NavLink>
        <NavLink to="/form" activeClassName="is-active">Form </NavLink>
        <NavLink to="/end" activeClassName="is-active">End </NavLink>
    </div>
);

export default Header;