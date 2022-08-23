import React from 'react';

import {NavLink} from 'react-router-dom';
import about from "../images/about.jpg";
import "../Css/HomeAbout.css";
import Same from './Same';

const About = () => {
  return (
    <>
    <div>
    <Same 
        title="Know More about us"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure enim officia commodi dolor dolores. Animi dolore expedita at atque rerum."
        btn="Know More"
        images={about}
        />
    </div>
    </>
  )
}

export default About;
