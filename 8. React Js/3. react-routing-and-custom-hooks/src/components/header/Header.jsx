import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>Home Page</div>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        <li>
          <Link to={""} style={{ style: "none", color: "red" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"receipe-list"} style={{ style: "none", color: "red" }}>
            Recipe
          </Link>
        </li>
        <li>
          <Link to={"comment-list"} style={{ style: "none", color: "red" }}>
            Comments
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
