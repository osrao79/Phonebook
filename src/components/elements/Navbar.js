import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar border fixed-top navbar-expand-sm navbar-light bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          PhoneBook
        </Link>
        <div>
          <Link to="/contacts/add" className="btn btn-dark ml-auto">
            Create Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
