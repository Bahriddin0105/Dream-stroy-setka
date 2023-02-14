import React, { Component } from "react";
import Fivesheet from "./jss/Fivesheet";
import Foursheet from "./jss/Foursheet";
import Header from "./jss/Header";
import Onesheet from "./jss/Onesheet";
import Sixsheet from "./jss/Sixsheet";
import Threesheet from "./jss/Threesheet";
import Twosheet from "./jss/Twosheet";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Onesheet />
        <Twosheet />
        <Threesheet />
        <Foursheet />
        <Fivesheet/> */}
        <Sixsheet/>
      </div>
    );
  }
}
