import React, { Component } from "react";
import Header from "./jss/Header";
import Onesheet from "./jss/Onesheet";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Onesheet />
      </div>
    );
  }
}
