import React, { Component } from "react";
import "../css/threesheet.css";
import icon1 from "../image/icon_1.png";
import icon2 from "../image/icon_2.png";
import icon3 from "../image/icon_3.png";
import icon4 from "../image/icon_4.png";
import icon5 from "../image/icon_5.png";
import icon6 from "../image/icon_6.png";
import icon7 from "../image/icon_7.png";
import icon8 from "../image/icon_8.png";
import file1 from "../image/garant-bg 1.png";
import file2 from "../image/grand bg 2.png";

export default class Threesheet extends Component {
  render() {
    return (
      <div className="threesheet">
        <div className="threesheet">
          <h1 className="threeh1">8 ПРИЧИН довериться</h1>
          <p className="threep">нам полностью</p>
          <div className="filesimg">
            <img className="file1" src={file1} alt="" />
            <img className="file2" src={file2} alt="" />
          </div>
          <div className="threecard1">
            <h2 className="threecardh2">7 лет опыта</h2>
            <img className="threeicon" src={icon1} alt="" />
            <p className="threecardp">
              Мы изготавливаем строительные сетки с 2016 года и профессионалы в
              своем деле
            </p>
          </div>
          <div className="threecard2">
            <h2 className="threecardh2">Собственный завод</h2>
            <img className="threeicon" src={icon2} alt="" />
            <p className="threecardp">
              Наш завод оснащен специальной техникой и красками, привезенные
              из-за границы
            </p>
          </div>
          <div className="threecard3">
            <h2 className="threecardh2">Не придется ждать</h2>
            <img className="threeicon" src={icon3} alt="" />
            <p className="threecardp">
              Продукты всегда стоят на готове и вам не придется ждать
              производста
            </p>
          </div>
          <div className="threecard4">
            <h2 className="threecardh2">1-й поставщик</h2>
            <img className="threeicon" src={icon4} alt="" />
            <p className="threecardp">
              Мы работаем напрямую без посредников, поэтому предлагаем лучшие
              цены и качество
            </p>
          </div>
          <div className="threecard5">
            <h2 className="threecardh2">Качество</h2>
            <img className="threeicon" src={icon5} alt="" />
            <p className="threecardp">
              Мы используем современные передовые технологии, чтобы наши
              продукты имели наилучшее качество и долговечность.
            </p>
          </div>
          <div className="threecard6">
            <h2 className="threecardh2">Гарантия</h2>
            <img className="threeicon" src={icon6} alt="" />
            <p className="threecardp">
              Мы даем гарантию на наши продукты 5-30 лет
            </p>
          </div>
          <div className="threecard7">
            <h2 className="threecardh2">Доставка по узбекистану</h2>
            <img className="threeicon" src={icon7} alt="" />
            <p className="threecardp">
              Доставляем по всему Узбекистану, доставка по Ташкентку бесплатная
            </p>
          </div>
          <div className="threecard8">
            <h2 className="threecardh2">50+ сотрудников</h2>
            <img className="threeicon" src={icon8} alt="" />
            <p className="threecardp">
              Наши сотрудники специалисты своего дела, выполняют свою работы в
              срок и качественно
            </p>
          </div>
        </div>
      </div>
    );
  }
}
