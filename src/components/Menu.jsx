import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tareas">Tareas</Link>
        </li>
        <li>
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;