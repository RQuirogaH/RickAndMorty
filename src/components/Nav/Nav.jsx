import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div style={{backgroundColor: "red"}}>
      <Link to={"/"}>Landing</Link>
    </div>
  );
}
