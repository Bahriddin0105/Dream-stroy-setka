import React, { Component } from "react";
import "../css/header.css";
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
            <img src="" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
