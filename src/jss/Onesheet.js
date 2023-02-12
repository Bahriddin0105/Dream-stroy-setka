import React, { Component } from "react";
import "../css/onesheet.css";
import one from "../image/one.png";
import two from "../image/two.png";
import three from "../image/three.png";
import four from "../image/four.png";
import five from "../image/five.png";

export default class Onesheet extends Component {
  render() {
    return (
      <div className="onesheeet">
        <div className="onesheet">
          <h1 className="onesheeth1">Ассортимент Продукции</h1>
          <p className="onesheetp">которые ценят за качество и практичность</p>
          <div className="onecadr">
            <div className="card1">
              <h3 className="cardh3">Строительная сетка</h3>
              <p className="cardp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                consequat praesent massa nunc.
              </p>
              <img className="cardimg" src={one} alt="" />
              <span className="cardbtn">
                <p>Подробнее</p>
              </span>
            </div>
            <div className="card2">
              <h3 className="cardh3">Дорожная сетка</h3>
              <p className="cardp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                consequat praesent massa nunc.
              </p>
              <img className="cardimg" src={two} alt="" />
              <span className="cardbtn">
                <p>Подробнее</p>
              </span>
            </div>
            <div className="card3">
              <h3 className="cardh3">Рулонная сетка</h3>
              <p className="cardp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                consequat praesent massa nunc.
              </p>
              <img className="cardimg" src={three} alt="" />
              <span className="cardbtn">
                <p>Подробнее</p>
              </span>
            </div>
            <div className="card4">
              <h3 className="cardh3">Дорожная сетка</h3>
              <p className="cardp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                consequat praesent massa nunc.
              </p>
              <img className="cardimg" src={four} alt="" />
              <span className="cardbtn">
                <p>Подробнее</p>
              </span>
            </div>
            <div className="card5">
              <h3 className="cardh3">Проволоки</h3>
              <p className="cardp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                consequat praesent massa nunc.
              </p>
              <img className="cardimg" src={five} alt="" />
              <span className="cardbtn">
                <p>Подробнее</p>
              </span>
            </div>
            <div className="card6">
              <h3 className="cardh3">Дорожная сетка</h3>
              <p className="cardp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                consequat praesent massa nunc.
              </p>
              <img className="cardimg" src={four} alt="" />
              <span className="cardbtn">
                <p>Подробнее</p>
              </span>
            </div>
            <div className="card7">
              <h3 className="cardh3">Дорожная сетка</h3>
              <p className="cardp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                consequat praesent massa nunc.
              </p>
              <img className="cardimg" src={four} alt="" />
              <span className="cardbtn">
                <p>Подробнее</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
