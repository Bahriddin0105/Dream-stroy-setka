import React, { Component } from "react";
import "../css/footer.css";
import logo from "../image/logo.jpg"
import tg from "../image/tg.png"
import insta from "../image/insta.png"
import face from "../image/face.png"


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div>
                    <img className="foologo" src={logo} alt="" />

                    <p className="foop">Производство строительных сеток и проволок в Узбекистане</p>
                    <a href="httaps://t.me/dream_stroy_setka"><span className="footg"><img className="" src={tg} alt="" /></span></a>
                    <a href="https://instagram.com/_draem_stroy_setka_"> <span className="fooins"><img className="" src={insta} alt="" /></span></a>
                    <a href="https://facebook.com/dream_stroy_setka"><span className="fooface"><img className="" src={face} alt="" /></span></a>
                    <h5 className="footime1">Пн-сб 9:00-20:00</h5>
                    <p className="footime2">Часы работы</p>
                    <span className="foonuqta"></span>
                    <p className="foophone1">Позвоните нам по номеру</p>
                    <a href="tel:+998955000099"> <h3 className="foophone2">+998 95 500 00 99</h3></a>
                </div>
            </div>
        );
    }
}
