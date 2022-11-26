import * as React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.min.css";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <Router />
    </div>
  );
}

export default App;
