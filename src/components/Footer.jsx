import React from "react";
import "./style_footer.css";
//import svg images for widgets
import insta from "../images/insta.svg";
import whatsapp from "../images/whatsapp.svg";
import telegram from "../images/telegram.svg"

const Footer = ()=> { //create component for our footer
    return (
      //semantic tag footer
        <footer className="footer"> 
        {/* left side in our footer */}
          <div className="footer__left">
            <ul>
                <li><a href="/">О компании</a></li>
                <li><a href="/">Доставка и оплата</a></li>
                <li><a href="/">Лента материалов</a></li>
                <li><a href="/">Политика возраста</a></li>
            </ul>
          </div>
          {/* center in our footer */}
          <div className="footer__center">
            <ul>
                <li><h3>Введите номер</h3></li>
                {/* input for telephone number */}
                <li><input type="tel" placeholder="+996(_)___ _ _ _" className="telephone"/></li>
                <li>Выберите удобный мессенджер для общения</li>
                <li className="footer__center_list"><a href="/" className="whatsapp"><img src={whatsapp} alt="whaats app"/></a><a className="telega" href="/"><img src={telegram} alt="telega"/></a><a className="insta" href="/"><img src={insta} alt="instagram"/></a></li>
            </ul>
          </div>
          {/* right side with contact information */}
          <div className="footer__right">
            <ul>
                <li>Тел:+996 705 188 955</li>
                <li>Тел:+996 555 188 955</li>
                <li>Адрес:Бакаева 126</li>
            </ul>
          </div>
        </footer>
    )
}


export default Footer