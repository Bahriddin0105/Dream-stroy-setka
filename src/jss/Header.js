import React, { Component } from "react";
import "../css/header.css";
import barg1 from "../image/left.svg"
import barg2 from "../image/right.svg"
import logo from "../image/logo.jpg"
import bg from "../image/bg.png";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="back">
          <div className="backimg">
            <img src={bg} alt="" />
          </div>
          <div className="navbar">
            <img className="logo" src={logo} alt="" /> <span>Производство строительных сеток и проволок в Узбекистане</span>
          </div>

          <div className="leftbargleft"><img src={barg1} alt=""/></div>
          <div className="leftbargright"><img src={barg2} alt=""/></div>
        </div>
      </div>
    );
  }
}
