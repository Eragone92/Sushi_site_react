import React from "react";
import "./style_header.css";
// import svg image
import  Vector_search from "../images/Vector_search.svg";





const Header = ()=> { // create component for our header

return (
    // create simantic tag header
<header className="main__block_header">
<div className="heder__left_side">
    {/* left side in our header */}
    <h4 className="heder__left_side-text">Наш телефон</h4>
<div className="heder__left_side-numbers">
    <span>+996 705 188 955</span><br/>
    <span>+996 555 188 955</span>
</div>
<div className="heder__left_side-time">работаем с 10:00 до 00:00</div>
</div>
{/* right side in header */}
<div className="heder__right_side">
    <div className="heder__right_side-part_1">
        <div className="city">Город</div>
        <div className="city_name">Бишкек</div>
    </div>
<div className="heder__right_side-part_2">
    <a href="/">Отзывы</a>
    <a className="search" href="/">Доставка и оплата</a>
    <img src={Vector_search} alt="search_img" className="search_img" />
</div>
</div>
</header>
)
}

export default Header