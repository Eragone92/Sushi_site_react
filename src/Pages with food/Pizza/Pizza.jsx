import React from "react";
import CardProduct from "../../components/CardProduct";
import pica from "../../images/pica.jpg"
import "../../PageTwo/style_page_two.css";
import Header from "../../components/Header";
import Text from "../../components/Text";
import Footer from "../../components/Footer";




const Pizza = ()=> {
   return (
    <div className="page_two">
      <Header/>
       <h2 className="page_two__sets">Пицца</h2>
       <div className="card_collectionik">
         <CardProduct sr={pica} foodName="Саломон сет" count="1050 грамм, 30 кусочков" price="1500 СОМ"/>
         <CardProduct sr={pica} foodName="Сет 5 Филадельфий" count="1120 грамм 40 кусочек" price="1499 СОМ"/>
         <CardProduct sr={pica} foodName="Филадельфия и лосось сет" count="1260 грамм 36 кусочек" price="1499 СОМ"/>
         <CardProduct sr={pica} foodName="Сет 6 Филадельфий" count="1320 грамм 46 кусочек" price="1559 СОМ"/>
         <CardProduct sr={pica} foodName="Топовый сет" count="1020 грамм 40 кусочек" price="1519 СОМ"/>
         <CardProduct sr={pica} foodName="Камикадзе сет" count="1200 грамм 52 кусочек" price="1469 СОМ"/>
         <CardProduct sr={pica} foodName="Сет 4 Филадельфии" count="1100 грамм 32 кусочек" price="1559 СОМ"/>
         <CardProduct sr={pica} foodName="Филадельфия LOVE сет" count="1000 грамм 40 кусочек" price="1479 СОМ"/>
         <CardProduct sr={pica} foodName="Якудза сет" count="1270 грамм 50 кусочек" price="1499 СОМ"/>
       </div>
       <Text/>
       <Footer/>
    </div>
   )
}



export default Pizza