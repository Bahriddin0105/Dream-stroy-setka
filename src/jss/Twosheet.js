import React, { Component } from "react";
import "../css/twosheet.css";
import one from "../image/three.png";
import two from "../image/four.png";
import three from "../image/five.png";
import four from "../image/five1.png";

export default class Twosheet extends Component {
  render() {
    return (
      <div className="twosheet">
        <div className="infobox">
          <div className="twoborder">
            <h3 className="twoh3">Хотите</h3>
            <h2 className="twoh2">заказать у нас?</h2>
            <p className="twop">
              Оставьте заявку и мы свяжимся с вами в течении 20 минут
            </p>
            <span className="inputname">
              <label className="namelabel">Введите имя</label>
              <input className="inname" type="text" placeholder="Имя" />
            </span>
            <span className="inputnum">
              <label className="numlabel">Введите номер</label>
              <input className="innum" type="number" placeholder="+998" />
            </span>
            <a href="tel:+998955000099"><span className="twosheetbtn">
              <p>Оставьте заявку</p>
            </span></a>
            <p className="twosheetend">
              Нажимая “Оставить заявку” вы даете согласие на обработку ваших
              данных
            </p>
          </div>
        </div>
        <div className="imgbox">
          <img className="oneimg" src={one} alt="" />
          <img className="twoimg" src={three} alt="" />
          <img className="threeimg" src={four} alt="" />
          <img className="fourimg" src={two} alt="" />
        </div>
      </div>
    );
  }
}
