import React from 'react'
import img1 from './image/Footerlogo.png'
export const Footer = () => {
  return (
    <div>
        <footer className='Footer'>
            <img src={img1} alt="" srcset="" />
            <div className='FooterDiv'>
                <p>Home</p>
                <p>Products</p>
                <p>GAllary</p>
            </div>
            <div className='FooterDiv'>
                <p>Palm Court Bldg M, 501/B, 5th Floor,New Link Road, Beside Goregaon Sports
                   Complex, Malad West, Mumbai,
                   400064, Maharashtra
                   websupport@justdial.com
                   </p>
            </div>
        </footer>
    </div>
  )
}
