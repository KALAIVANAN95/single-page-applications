import React from 'react';
import "../Css/FooterStyle.css";

const Footer = () => {
  return (
   <>
   <div>
    <footer>
        <div className="container container-flex">
            <div className='icons'>
            <i class="fa-brands fa-facebook-f icon"></i>
            <i class="fa-brands fa-instagram icon"></i>
            <i class="fa-brands fa-twitter icon"></i>
            <i class="fa-brands fa-linkedin icon"></i>
            </div>
            <div className="line">
                <hr/>
                <hr/>
            </div>
            <div className="copyright">
                <p>All rights reserved &copy;</p>
                <p>
                    Made with Love by KALAI
                </p>
            </div>
        </div>
    </footer>
   </div>
   
   </>
  )
}

export default Footer
