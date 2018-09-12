import React from 'react';

import { Link } from 'react-router-dom'
import '../styles/navbar.css';

const Navbar = () => (
        <div className="navbar">
            <Link className="item" to="/" >Heim</Link>
            <Link className="item" to="/database" >Database</Link>
            <Link className="item" to="/graf" >Graf</Link>
        </div>
);

export default Navbar;