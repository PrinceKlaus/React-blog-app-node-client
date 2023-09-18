import React from "react"
import "./FooterStyle.css"
import Top from '../GenericComonents/Header/Top'
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    
      <div className="footer">
      {/* constainer 1*/}
      <div className="footerContainer">
      <h1 className="fotterSiren"><Top/></h1>
      <div className="fotterBlogExplaine">
      “The man who goes to the gym every single day regardless of how he feels will always beat the man who goes to the gym when he feels like going to the gym.”
        </div>
      <div className="fotterSocialMedia">
      <Twitter/> <Facebook/>  <Instagram/> <LinkedIn/> 
      </div>
  
      </div>
          {/* constainer 2*/}
          <div className="footerContainer">
      <h1 className="fotterSiren">Services</h1>
      <Link to='/'        className='FooterNonActiveNav'>Home</Link>
    <Link to='/Bollywood' className='FooterNonActiveNav'>Bollywood</Link>
    <Link to='/Hollywood' className='FooterNonActiveNav'>Hollywood</Link>
    <Link to='/Technology'className='FooterNonActiveNav'>Technology</Link>
    <Link to='/Fitness'   className='FooterNonActiveNav'>Fitness</Link>
    <Link to='/Food'      className='FooterNonActiveNav' >Food</Link>
      </div>
      {/* constainer 3 */}
      <div className="footerContainer">
      <h1 className="Resources">Resources</h1>
      <div className="help">About</div>
      <div className="help">Contact Us</div>
      <div className="help">Help</div>
      </div>
      {/* constainer 4*/}
      <div className="footerContainer">
      <h1 className='readMore'>More</h1>
       <a href="tel:9527149246" target="_blank">+919527149246</a>
       <a href="mailto:xyz@gmail.com" target="_blank">mail us</a>
      <div className="copyRight"> <CopyrightIcon/>Made by Prince Verma</div>
      </div>
      </div>
  
  )
}

export default Footer
