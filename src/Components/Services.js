
import React from 'react';
import '../Css/ServiceStyle.css';
import Card from './Card';
import Data from './Data';

const Services = () => {
  return (
    <>
    <div>
      <h1>Our Services</h1>
      <div className='services'>
       
       {
        Data.map((values)=>{
          return(
            <>
            
            <Card 
            title={values.Stitle}
            imgSource={values.imgsrc}
            desc1={values.desc}
            btnService={values.btnService}
            
            />
            
            
            </>
          )
        })
       }
        
        

        </div>
        
    </div>
    </>

  )
}

export default Services
