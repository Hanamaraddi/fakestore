import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            FakeStore
          </NavLink>
          <form className="d-flex " role="search">
            <NavLink to="/about">
              <button type="submit" class="btn btn-outline-dark btn-header">
                About
              </button>
            </NavLink>
            <NavLink to="/register">
              <button type="submit" class="btn btn-outline-dark btn-header">
                Register
              </button>
            </NavLink>
            <NavLink to="/login">
              <button
                className="btn btn-outline-success btn-header"
                type="submit"
              >
                Login
              </button>
            </NavLink>
          </form>
        </div>
      </nav>
    </div>
  );
};
