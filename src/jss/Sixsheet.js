import React, { Component } from "react";
import "../css/sixsheet.css";
import shit from "../image/shit.png"

export default class Sixsheet extends Component {
  render() {
    return (
      <div className="sixsheet">
        <div>
            <img className="sixshit" src={shit} alt="" />
            <h1 className="sixh1">Обратившись к нам, вы гарантировано получите не только лучшую цену, но и 100% качественную сетку или проволоку точно в срок</h1>
            <div className="">
                <div className="">
                <p className=""></p>
                <img className="" />
                </div>
            </div>
        </div>
      </div>
    );
  }
}
