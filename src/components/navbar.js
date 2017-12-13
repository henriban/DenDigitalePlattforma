import React from 'react';

import { Link } from 'react-router-dom'
import '../styles/navbar.css';

const Navbar = () => (
        <div className="navbar">
            <Link className="item" to="/" >Hjem</Link>
            <Link className="item" to="/graf" >Graf</Link>
            <Link className="item" to="/om" >Om</Link>
        </div>
);

export default Navbar;