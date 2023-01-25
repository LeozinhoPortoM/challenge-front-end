import "./Header.css";

import React from "react";
import Logo from "./Logo";

export default (props) => (
  <header className="header d-sm-flex flex">
    <Logo />
    <div>
      <h1 className="mt-3">
        <i className={`fa fa-${props.icon}`}></i>
        {props.title}
      </h1>
      <p className="lead text-muted">{props.subtitle}</p>
    </div>
  </header>
);
