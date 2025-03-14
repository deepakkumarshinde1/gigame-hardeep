import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/create-account">Sign Up</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header;
