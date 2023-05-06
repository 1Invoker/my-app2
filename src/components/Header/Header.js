import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/rabbits" activeClassName="active">
              Кролики
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">
              Продукты из кроликов
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" activeClassName="active">
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
