import React, { Component } from "react";
import Header from "./jss/Header";
import Onesheet from "./jss/Onesheet";
import Twosheet from "./jss/Twosheet";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        {/* <Onesheet /> */}
        <Twosheet />
      </div>
    );
  }
}
