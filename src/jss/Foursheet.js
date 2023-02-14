import React, { Component } from "react";
import "../css/foursheet.css"
import icon1 from "../image/four1.png"
import icon2 from "../image/four2.png"
import icon3 from "../image/four3.png"

export default class Foursheet extends Component {
    render() {
        return (
            <div className="foursheet">
                <div>
                    <h1 className="fourh1">
                        Доставка по всему <br /><b>Узбекистану</b>
                    </h1>
                    <img className="icondas" src={icon1} />
                    <p className="textdas">Сделайте заказ в большом количестве и доставка по Ташкенту будет бесплатной</p>
                    <img className="icontime" src={icon2} /> 
                    <p className="texttime">Доставим в удобное время и с удобной формой оплаты  для вас</p>
                    <img className="iconbox" src={icon3} /> 
                    <p className="textbox">Бесплатная погрузка груза при самовывозе со склада</p>
                </div>
            </div>
        );
    }
}
