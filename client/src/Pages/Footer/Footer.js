import React from 'react'
import "./Footer.css"
// import Logo from "../../Source/img/footerlogo.png"
import { AiFillFacebook } from 'react-icons/ai';
import { TiSocialInstagram } from 'react-icons/ti';
import { AiFillYoutube } from 'react-icons/ai';
const Footer = () => {
 return (
  <div className="footer-top">
   <div className="container">
    <div className="footer-bottom-content clearfix">
     <div className="row">
      <div className="col-lg-4 col-md-4">
       {/* <div className="logo-footer">
        <a className="navbar-brand" href="/"> <img src={Logo} alt="" /></a>
       </div> */}



       <ul className="footer-social-list list-social list-inline">
        <li>

         <a href="#" target="#">  <AiFillFacebook />
          <i className="social_facebook "></i>
         </a>
        </li>
        <li>
         <a href="#" target="#"><TiSocialInstagram />
          <i className="social_instagram "></i>
         </a>
        </li>
        <li>
         <a href="#" target="_#"><AiFillYoutube />
          <i className="social_youtube "></i>
         </a>
        </li>
       </ul>
      </div>
      <div className="col-lg-4 col-md-4">
       <h5>Useful Link</h5>
       <ul className="list-menu">
        <li>
         <a href="/explained">How it works </a>
        </li>
        <li>
         <a href="/legal/terms/">Terms of Service</a>
        </li>
        <li>
         <a href="/legal/privacy/">Privacy policy</a>
        </li>
       </ul>
      </div>
      <div className="col-lg-4 col-md-4">
       <h5>Contact Info</h5>
       <ul className="list-menu contact-list">
        <li>
         Alx Networks
        </li>
        <li>
         support@alx.com
        </li>
        <li>+251000000</li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Footer