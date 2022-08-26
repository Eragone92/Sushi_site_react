import React from "react";
import CardProduct from "../components/CardProduct";
import Set_one from "./PhotoSets/Set_one.png"
import Set_two from "./PhotoSets/Set_two.png"
import Set_three from "./PhotoSets/Set_three.png"
import Set_four from "./PhotoSets/Set_four.png"
import Set_five from "./PhotoSets/Set_five.png"
import Set_six from "./PhotoSets/Set_six.png"
import Set_seven from "./PhotoSets/Set_seven.png"
import Set_eight from "./PhotoSets/Set_eight.png"
import Set_nine from "./PhotoSets/Set_nine.png"
import Header from "../components/Header";
import "./style_page_two.css"
import Footer from "../components/Footer";
import Text from "../components/Text";



const PageTwo = ()=> {
   return (
    <div className="page_two">
      <Header/>
       <h2 className="page_two__sets">Сеты</h2>
       <div className="card_collectionik">
         <CardProduct sr={Set_one} foodName="Саломон сет" count="1050 грамм, 30 кусочков" price="1500 СОМ"/>
         <CardProduct sr={Set_two} foodName="Сет 5 Филадельфий" count="1120 грамм 40 кусочек" price="1499 СОМ"/>
         <CardProduct sr={Set_three} foodName="Филадельфия и лосось сет" count="1260 грамм 36 кусочек" price="1499 СОМ"/>
         <CardProduct sr={Set_four} foodName="Сет 6 Филадельфий" count="1320 грамм 46 кусочек" price="1559 СОМ"/>
         <CardProduct sr={Set_five} foodName="Топовый сет" count="1020 грамм 40 кусочек" price="1519 СОМ"/>
         <CardProduct sr={Set_six} foodName="Камикадзе сет" count="1200 грамм 52 кусочек" price="1469 СОМ"/>
         <CardProduct sr={Set_seven} foodName="Сет 4 Филадельфии" count="1100 грамм 32 кусочек" price="1559 СОМ"/>
         <CardProduct sr={Set_eight} foodName="Филадельфия LOVE сет" count="1000 грамм 40 кусочек" price="1479 СОМ"/>
         <CardProduct sr={Set_nine} foodName="Якудза сет" count="1270 грамм 50 кусочек" price="1499 СОМ"/>
       </div>
       <Text/>
       <Footer/>
    </div>
   )
}



export default PageTwo