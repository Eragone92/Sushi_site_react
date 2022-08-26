import React from "react";
import CardProduct from "./CardProduct";// import component Card
// import images for our components
import RectangleThree from "../images/RectangleThree.png";
import RectangleTwo from "../images/RectangleTwo.png";
import RectangleOne from "../images/RectangleOne.png";
//add styles
import "./style_cardSection.css";
//add Carousel from react-bootstra library
import Carousel from 'react-bootstrap/Carousel';

function CardSection() { // create component with caarousel
    return (
        <div className="caruselka"> 
      
      <Carousel className="carousel">
        {/* first slide in our carousel */}
        <Carousel.Item >
        <div className="collec">
          {/* create 3 components with cards and write props for them */}
             <CardProduct sr={RectangleThree} foodName="Саломон сет" count= "1050 грамм, 30 кусочков" price = "1500 COM"/>
             <CardProduct sr={RectangleTwo} foodName="Филадельфия и лосось сет" count= "1260 грамм, 36 кусочков" price = "1150 COM"/>
             <CardProduct sr={RectangleOne} foodName="Самая большая Филадельфия" count= "2050 грамм, 45 кусочков" price = "2100 COM"/>
              </div>
       
        </Carousel.Item>
        {/* second slide in our carousel */}
        <Carousel.Item>
        <div className="collec">
          {/* create 3 components with cards and write props for them */}
             <CardProduct sr={RectangleThree} foodName="Саломон сет" count= "1050 грамм, 30 кусочков" price = "1500 COM"/>
             <CardProduct sr={RectangleTwo} foodName="Филадельфия и лосось сет" count= "1260 грамм, 36 кусочков" price = "1150 COM"/>
             <CardProduct sr={RectangleOne} foodName="Самая большая Филадельфия" count= "2050 грамм, 45 кусочков" price = "2100 COM"/>
              </div>
        </Carousel.Item>
       
      </Carousel>
    
      </div>
    );
  }
  
  export default CardSection;