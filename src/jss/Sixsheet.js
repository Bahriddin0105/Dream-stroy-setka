import React, { Component } from "react";
import "../css/sixsheet.css";
import shit from "../image/shit.png"
import sixtime from "../image/timesix.png"
import map from "../image/Vector.png"
import pay from "../image/pay.png"
import ishchi from "../image/ishchi.png"
import setka from "../image/zabor.png"
import ser1 from "../image/ser1.png"
import ser2 from "../image/ser2.png"

export default class Sixsheet extends Component {
  render() {
    return (
      <div className="sixsheet">
        <div>
          <img className="sixshit" src={shit} alt="" />
          <h1 className="sixh1">Обратившись к нам, вы гарантировано получите не только лучшую цену, но и <b>100% качественную сетку или проволоку точно в срок</b></h1>
          <div className="sixbox1">
            <div className="">
              <p className="sixboxp">Берем на себя ответственность за <b>сроки и качество</b> </p>
              <img className="sixboximg" src={sixtime} alt="" />
            </div>
          </div>
          <div className="sixbox2">
            <div className="">
              <p className="sixboxp">Самый <b>большой выбор</b> в Узбекистане</p>
              <img className="sixboximg" src={map} alt="" />
            </div>
          </div>
          <div className="sixbox3">
            <div className="">
              <p className="sixboxp">Для наших клиентов любой способ <b>оплаты</b></p>
              <img className="sixboximg" src={pay} alt="" />
            </div>
          </div>
          <img className="sixishchi" src={ishchi} alt="" />
          <div className="sixgarant">
            <h1 className="mingarant">5-10</h1> <br/><small className="smallsix1">лет гарантии</small>
            <p className="dashedline"></p>
            <h1 className="maxgarant">30 лет</h1><br/><small className="smallsix2">  эксплуатации наших продукций</small>
          </div>
          <img className="setkasix" src={setka} alt="" />
          <img className="sersix1" src={ser1} alt="" />
          <img className="sersix2" src={ser2} alt="" />
          <img className="sersix3" src={ser1} alt="" />
        </div>
      </div>
    );
  }
}
