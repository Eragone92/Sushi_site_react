
import React from "react";
import CardSection from "../components/CardSection";
import Coruselka from "../components/Carouselka";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Text from "../components/Text";
import "./style_main_page.css";







const MainPage = ()=> {  //component for main content in site
    return (<>
    {/* div for center of our site  */}
        <div className="main__page">
        <Header/>
        <Coruselka/>
        <Gallery/>
        <div className="caruselka__links"><a className="News" href="/" active>Новинки</a><a className="popular active" href="/">Популярное</a></div>
        <CardSection/>
         <Text/>
         <Footer/>
        </div>
        </>
    )
}


export default MainPage