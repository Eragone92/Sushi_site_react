import React from "react";
import "./style_nav.css";
import {Link} from "react-router-dom";
import "./adaptive.css"

function NavBar  ()  { // create navbat or left side in our internet shop
  return (//create simantic tag for nav
  <nav className="nav"> 
  {/* create out logo with href / */}
    <a href="/">
      <div className="nav__logo"> </div>
    </a>
    {/* text for logo */}
    <h2 className="nav__logo_text">ROMSEM</h2>
    {/* create lists with links for our shop(images add in css using psevdo elements before) */}
    <ul className="navbar">
      <li>
        <Link to="/pizza">Пицца</Link>
      </li>
      <li>
        <Link to="/sets">Сеты</Link>
      </li>
      <li>
        <Link to="/">WOK</Link>
      </li>
      <li>
        <Link to="/">Роллы</Link>
      </li>
      <li>
        <Link to="/">Суши</Link>
      </li>
      <li>
        <Link to="/">Салаты</Link>
      </li>
      <li>
        <Link to="/">Супы</Link>
      </li>
      <li>
        <Link to="/">Корн доги</Link>
      </li>
      <li>
        <Link to="/">Напитки</Link>
      </li>
      <li>
        <Link to="/">Акции</Link>
      </li>
    </ul>

  </nav>
  )
};

export default NavBar;