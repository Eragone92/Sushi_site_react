import React from "react";
// import carousel from bootstrap library
import {Carousel} from "react-bootstrap";
// import img for carousel
import corusel_1 from "../images/corusel_1.png";
// import style
import "./style_carousel.css";


const Coruselka = ()=> { // create component for carousel
    return (
      <Carousel className="carusel">
        {/* first slide */}
        <Carousel.Item >
            <img className="d-block" src={corusel_1} alt="slider one" style={{width: "950px", height: "470px"}}/>
        </Carousel.Item >
        {/* second slide */}
        <Carousel.Item >
            <img className="d-block" src={corusel_1} alt="slider one" style={{width: "950px", height: "470px"}}/>
        </Carousel.Item>
        {/* thirs slide */}
        <Carousel.Item >
            <img className="d-block" src={corusel_1} alt="slider one" style={{width: "950px", height: "470px"}}/>
        </Carousel.Item>
        {/* fourth slide */}
        <Carousel.Item >
            <img className="d-block" src={corusel_1} alt="slider one" style={{width: "950px", height: "470px"}}/>
        </Carousel.Item>
        {/* fifth slide */}
        <Carousel.Item >
            <img className="d-block" src={corusel_1} alt="slider one" style={{width: "950px", height: "470px"}}/>
        </Carousel.Item>
      </Carousel>
    )
}

export default Coruselka