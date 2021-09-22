import React from "react";

import './header.styles.scss';

import {ReactComponent as Logo}   from '../../assets/logo.svg';

const Header = () => (
    <div className="header">
        <Logo className="logo" />
        <h2 className="title"> AWSOME BOOKMART APP</h2>
        <div className="menue"></div>
    </div>

)

export default Header;