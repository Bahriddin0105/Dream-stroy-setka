import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../css/fivesheet.css";
import five1 from "../image/Rectangle 1333.png"
import five2 from "../image/Rectangle 1334.png"
import tashkentcity from "../image/tash.png"
import disco from "../image/disco.png"
import dream from "../image/dream.png"
import golden from "../image/gold.png"

export default class Fivesheet extends Component {
    render() {
        return (
            <div className="fivesheet">
                <div>
                    <img className="ish1" src={five1} alt="" />
                    <img className="ish2" src={five2} alt="" />
                    <span></span>
                    <h2 className="mijoz">Наши клиент</h2>
                    <h3 className="bizhaq">о нас</h3>
                    <h1 className="fivesheeth1">Интересно как происходит<br /><b style={{textTransform: "uppercase"}}>
                        процесс работы?</b></h1>
                    <p className="fivesheetp">"Dream stroy setka" - является одним из ведущих производителей строительных сеток и проволок на рынке Узбекистана. Основная цель нашей компании — производить  сетки, которые качественные и надежные. Мы шаг за шагом и постоянно обновляем наши коллекции, материалы и постоянно совершенствуемся.</p>
                    <button className="konsul">Консультация</button>
                    <div className="klentimg">
                       <div className="disco1"> <img src={disco} alt="" /> </div>
                       <div className="dream1"> <img src={dream} alt="" /> </div>
                       <div className="tashkentcity1"> <img src={tashkentcity} alt="" /> </div>
                       <div className="golden1"> <img src={golden} alt="" /> </div>
                       <div className="disco2"> <img src={disco} alt="" /> </div>
                       <div className="dream2"> <img  src={dream} alt="" /> </div>
                    </div>
                </div>
            </div>
        );
    }
}
