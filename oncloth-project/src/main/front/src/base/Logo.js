import React from 'react';
import { Link } from "react-router-dom"
import img from "./소공로고.jpg";

const Logo = () => {
    return <Link to="/"><img src={img} alt="Logo"/></Link>;
};

export default Logo;