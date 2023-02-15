import React, { Component } from "react";
import "../css/sevensheet.css";
import { YMaps, Map, Placemark, FullscreenControl } from "react-yandex-maps";

export default class Sevensheet extends Component {
    render() {
        return (
            <div className="sevensheet">
                <div>
                    <YMaps>
                        <div className="mapsseven">
                            <Map defaultState={{ center: [41.277932, 69.184787], zoom: 12 }} >
                                <Placemark geometry={[41.277932, 69.184787]} />
                                <FullscreenControl />
                            </Map>
                        </div>
                    </YMaps>
                    {/* <div>
                        <h3 className="">Контакты</h3>
                        <img className="" src="" alt="" /><p className="">г. Ташкент, Мирабадский
                            р-н, Ферганская улица 119/15 </p>
                        <img className="" src="" alt="" /><p className="">Каждый день: 9:00 - 18:00</p>
                        <img className="" src="" alt="" /><p className="">+998 (55) 506 20 00</p>

                    </div> */}
                </div>
            </div>
        );
    }
}
