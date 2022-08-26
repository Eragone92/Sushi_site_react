import React from "react";
// import images for our gallery
import losos from "../images/losos.png";
import ugr from "../images/ugr.png";
import noMeat from "../images/noMeat.png";
import withFiladelfia from "../images/withFiladelfia.png";
import akcii from "../images/akcii.png";
// import styles for gallery
import "./style_gallery.css";
import "./adaptive.css"





const Gallery = ()=> { //create component galley
    return (
        // parent div for images with using grids
        <div className="main__block_gallery">
            {/* create images  */}

           <img src={losos} alt="losos" className="main__block_gallery-one"/>
           <img src={ugr} alt="ugr" className="main__block_gallery-two"/>
           <img src={noMeat} alt="no meat" className="main__block_gallery-three"/>
           <img src={withFiladelfia} alt="philadelphia" className="main__block_gallery-four"/>
           <img src={akcii} alt="akcii" className="main__block_gallery-five"/>
        </div>
    )
}


export default Gallery