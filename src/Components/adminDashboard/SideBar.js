import React from 'react';
import { NavLink, useActionData } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="SideBar">

    <ul>
        <li ><NavLink to="">Services</NavLink></li>
        <li><NavLink to="offersCrud">Offers</NavLink></li>
    </ul>
</div>
  );
}

export default SideBar;
