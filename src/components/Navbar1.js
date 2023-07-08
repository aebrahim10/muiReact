import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <header className="header">
      <img className="logo" src="./../img/logo.jpg" alt="logo" />
      <nav>
        <ul className="navbar">
          <li>
            <Link to="../Home">Home</Link>
          </li>
          <li>
            <Link to="../About">About</Link>
          </li>
          <li>
            <Link to="../Projects">Projects</Link>
          </li>
          <li>
            <Link to="../Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          alert("button clicked");
        }}
      >
        Account
      </button>
    </header>
  );
}
export default NavBar;
