import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <div>
        <Link to="/">
          <button className="btn btn-primary" type="button">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
