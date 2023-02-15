import React, { Component } from "react";
import "../css/sevensheet.css";
import geo from "../image/geo.png"
import time from "../image/time.png"
import phone from "../image/phone.png"
import { YMaps, Map, Placemark, FullscreenControl } from "react-yandex-maps";

export default class Sevensheet extends Component {
    render() {
        return (
            <div className="sevensheet">
                <div>
                    <YMaps>
                        <Map className="sevenmaps" defaultState={{ center: [41.277932, 69.184787], zoom: 6 }}>
                            <Placemark geometry={[41.277932, 69.184787]}/>
                        </Map>
                    </YMaps>
                    <div className="kontankseven">
                        <div className="borderseven">
                        <h3 className="sevensheeth3">Контакты</h3>
                        <img className="geoicon" src={geo} alt="" /><p className="geotext">г. Ташкент, Мирабадский
                            р-н, Ферганская улица 119/15 </p>
                        <img className="timeicon" src={time} alt="" /><p className="timetext">Каждый день: 9:00 - 18:00</p>
                        <img className="phoneicon" src={phone} alt="" /><p className="phonetext">+998 (55) 506 20 00</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
