import React from "react";
import Categories from "./Categories";
import Navi from "./Navi";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <Navi />
      <div className="row">
        <div className="col-md-3">
          <Categories />
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
