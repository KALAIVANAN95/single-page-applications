import React from 'react'
import services from '../images/about.jpg';
import {NavLink} from 'react-router-dom';
import '../Css/ServiceStyle.css';

const Card = (props) => {
  return (
    <>
      <div>
      <div className='card'>
          <h2>{props.title}</h2>
          <img src={props.imgSource} alt='services' className='serviceImg' />
          <p>{props.desc1}</p>
          <div className="btnBox">
            <div className="btn">
              <NavLink to='/about' className='readMore'>{props.btnService}</NavLink>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card
