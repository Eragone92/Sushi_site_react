
import React from "react";
import './App.css';
import MapBasket from "./components/MapBacket";
import Navigation from "./components/Navigation";
import MainPage from "./MainPage/MainPage";
import PageTwo from "./PageTwo/PageTwo";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pizza from "./Pages with food/Pizza/Pizza";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navigation/>
    <Routes>
       
       <Route path="/" element={<MainPage/>}/>
       <Route path="/sets" element={<PageTwo/>}/>
       <Route path="/pizza" element={<Pizza/>}/>
     
     </Routes>
     <MapBasket/>
    </BrowserRouter>
    </div>
 
  );
}

export default App;
