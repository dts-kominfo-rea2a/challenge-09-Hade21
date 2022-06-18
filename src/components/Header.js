// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">Call a friend</h1>
      <h4 className="caption">Your friendly contact app</h4>
    </header>
  );
};

export default Header;
