import "./HeroImgStyles.css";
import React from 'react';
import IntoImg from "../assets/pinklandscape.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroImg = () => {
  useEffect(() => {
    Aos.init({duration: 750});
  }, [])

  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntoImg} alt="IntoImg"/>
        </div>
        <div className="content">
            <p2>hi! my name is</p2>
        </div>

        <div className="content2">
            <h1>BRYANT ZHENG</h1>
        </div>

    </div>
  )
}

export default HeroImg