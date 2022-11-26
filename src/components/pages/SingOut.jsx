import React from "react";
import { Link } from "react-router-dom";


export default function SingOut() {
  return (
    <div>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-2" role="group" aria-label="First group">
          <Link to="/login">
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </Link>
        </div>
        <div className="btn-group me-2" role="group" aria-label="Second group">
          <Link to="/register">
            <button type="button" className="btn btn-info">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
