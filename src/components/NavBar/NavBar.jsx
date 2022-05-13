import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import SearchBar from "../SearchBar/SearchBar"
import "./NavBar.css";


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Youtube Clone</b>
          </Link>
        </li>
        <li>
          <SearchBar></SearchBar>
        </li>

        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
          </li>
        <li>
          {user ? (
            <h5>Welcome</h5>
          ) : (
            <button onClick={() => navigate("/register")}>Register</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
