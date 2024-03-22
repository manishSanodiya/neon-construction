import React from "react";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/config";
import imgs from '../logo/logo.png';
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Clear user data from localStorage
        localStorage.removeItem("encryptedEmail");
        // Redirect to home or login page
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "purple" }}
    >
      <div className="container-fluid">
        <NavLink
          href="/"
          style={{ textDecoration: "none", color: "#d8cbc7" }}
          className="navbar-brand"
        >
          {" "}
          <img
            className="logo"
            style={{ width: "11em" }}
            src={imgs}
            alt="logo"
          />{" "}
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/"
              className="nav-item nav-link active"
            >
              Dashboard
            </Link>
          </div>
          <div className="navbar-nav ms-auto">
            {localStorage.getItem("encryptedEmail") && (
              <button
                style={{ color: "white" }}
                onClick={handleLogout}
                className="nav-item nav-link"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
