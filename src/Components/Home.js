import React from 'react'
import {NavLink} from 'react-router-dom';
import library from "../images/library.png";
import "../Css/HomeAbout.css";
import Same from './Same';

const Home = () => {
  return (
    <>
      <div>
        <Same 
        title="Learning made easy"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure enim officia commodi dolor dolores. Animi dolore expedita at atque rerum."
        btn="Read More"
        images={library}
        />
      </div>
    </>
  )
}

export default Home
