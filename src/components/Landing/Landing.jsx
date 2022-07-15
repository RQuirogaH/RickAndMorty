import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to={"/home"}>Home</Link>
      <br />
      <Link to={"/characters"}>Character</Link>
      <br />
      <Link to={"/location"}>Location</Link>
    </div>
  );
};

export default Landing;
