import React from 'react'
import {Link} from "react-router-dom";
const Sidenavbar = () => {
  return (
    <nav>
        <h1></h1>
        <ul>
            <li><Link to="/products"/></li>
            <li><Link to="/buy"/></li>
        </ul>
    </nav>
  )
}

export default Sidenavbar;
