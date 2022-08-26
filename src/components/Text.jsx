import React from "react";
import "./style_text.css";




const Text = ()=> {// create component for text with info
    return (
        <div className="main__bottom">
           <h2 className="main__bottom_header">Заказать суши в Бишкеке</h2>
           <div className="main__bottom_text-content">
           <div>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим 
           время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.</div>

<div>В нашем меню более 20 видов суши:</div>
<ul className="main__bottom_text-content-list">
<li>Классические с сырым лососем, тунцом, окунем.</li>
<li>Экзотические с тигровой креветкой, морским гребешком.</li>
<li>Пикантные с копченым лососем, угрем.</li>
</ul>

<div>В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</div>
</div>
<div className="main__bottom_text-about">Подробнее</div>
        </div>
    )
}

export default Text