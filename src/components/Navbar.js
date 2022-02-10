import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const { user, handleLogout } = useAuth();

  if (user) {
    return (
      <div className="Navbar">
        <Link className="NavbarLink" to="/">Home</Link>
        <Link className="NavbarLink" to="/tasks">
          Tasks
        </Link>
        <Link className="NavbarLink" to="/new-task">
          Create a task
        </Link>
        <button className="NavbarButton" onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="Navbar">
      <Link className="NavbarLink" to="/login">Login</Link>
      <Link className="NavbarLink" style={{ marginLeft: "15px" }} to="/signup">
        Signup
      </Link>
    </div>
  );
}

export default Navbar;
