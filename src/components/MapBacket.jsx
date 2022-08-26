import React from "react";
import "./style_basket.css";
//import img for map
import map from "../images/map.png";
import "./adaptive.css"






const MapBasket = ()=> { //create component for page in rightside
    return (
       <div className="right__block">
        {/* create div foor backet */}
        <div className="bascket">
            <h3>Ваша корзина пуста</h3>
            <p className="add">Добавьте же скорее что-нибудь!</p>
            <button>Бесплатная доставка от 800 СОМ</button>
        </div>
        {/* div for map */}
        <div className="map">
            <img src={map} alt="map"/>
            <div className="frame"></div>
            <h4>Укажите адрес</h4>
            <p>И узнайте время доставки</p>
        </div>
       </div>
    )
}

export default MapBasket