
import "./navbarStyles.css";
import { Link } from "react-router-dom";
import React, {useState} from 'react';

const Navbar = () => {

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=1){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg": "header"}>
        <Link to="/">
            <h1>portfolio</h1>
        </Link>
    </div>
  );
};

export default Navbar;