import React, { Component } from "react";
import "../css/header.css";
import barg1 from "../image/left.svg"
import barg2 from "../image/right.svg"
import logo from "../image/logo.jpg"
import bg from "../image/bg.png";
import tg from "../image/tg.svg"
import insta from "../image/insta.svg"
import face from "../image/face.svg"
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="back">

          <div className="navbar">
            <img className="logo" src={logo} alt="" /> <span className="logotekst">Производство строительных сеток и проволок в Узбекистане</span>
            <a href="httaps://t.me/dream_stroy_setka"><span className="tground">
              <img src={tg} alt="" />
            </span></a>
            <a href="https://instagram.com/_draem_stroy_setka_"><span className="instaround">
              <img src={insta} alt="" />
            </span></a>
            <a href="https://facebook.com/dream_stroy_setka"> <span className="faceround">
              <img src={face} alt="" />
            </span></a>
            <span className="time1">Часы работы</span>
            <span className="time2">Пн-сб 9:00-20:00</span>
            <span className="nuqta"></span>
            <span className="phone1">Позвоните нам по номеру</span>
            <a href="tel:+998955000099"><span className="phone2">+998 95 500 00 99</span></a>
            {/* <span className="languz"><p className="uz">UZ</p></span>
            <span className="langru"><p className="ru">RU</p></span> */}
          </div>
          <div className="body">
            <p className="bodytekst">Крупнейшие по производству строительных сеток и проволок
              c 7 летним опытом</p>
            <span className="bodyline"></span>
            <p className="linetekst">Продукты всегда на готове вам не придется ждать</p>
            <a href="tel:+998955000099"><span className="konsultatsiya"><p>Консультация</p></span></a>
          </div>

          <div className="leftbargleft"><img src={barg1} alt="" /></div>
          <div className="leftbargright"><img src={barg2} alt="" /></div>
        </div>
      </div>
    );
  }
}
