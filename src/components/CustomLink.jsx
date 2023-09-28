import React from "react";
import { Link } from "react-router-dom";
import "./../styles/CustomLink.css";

function CustomLink({ children, to }) {
  return (
    <i className='custom-link'>
      <Link to={to}>{children}</Link>
    </i>
  );
}

export default CustomLink;
