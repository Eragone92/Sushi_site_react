import React from "react";
import "./style_card.css";





function CardProduct (props) { // create compnent for cards with products
    return (
        <div className="cardFood">
            {/* create a props src for img in component */}
        <img src={props.sr} alt="element one"/> 
        {/* create props for main text in card */}
         <div className="card__main_text">{props.foodName}</div>
         {/* create props for count */}
         <div className="card__main_text-count">{props.count}</div>
         <div className="card__main_want-buy">
            {/* props for price */}
         <div className="card__main_text-price">{props.price}</div>
         <button>Хочу!</button>
        </div> 
     </div>
    )
}


export default CardProduct 