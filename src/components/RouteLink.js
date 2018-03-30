import React from "react";
import { Link } from "react-router";

const RouteLink = props => {
  return props.href.match(/^(https?:)?\/\//) ? (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link to={props.href}>{props.children}</Link>
  );
};

export default RouteLink;
