import React from 'react'
import { FaHome, FaUser, FaEnvelope, FaFacebook, FaPhone, FaPhoneAlt, FaMapMarked, FaMapMarkedAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Footer() {
  return (
    <div>
       <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>QUICK LINKS</h4>
  	 			<ul>
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#">About Us</a></li>
  	 				<li><a href="#">Career</a></li>
  	 				
  	 				<li><a href="/Contact">Contact Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>OUR SERVICES</h4>
  	 			<ul>
  	 				<li><a href="#">Tax Registration</a></li>
  	 				<li><a href="#">Start a Business</a></li>
  	 				<li><a href="#">Property & Personal</a></li>
  	 				<li><a href="#">Goverment Registration</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>CONTACT US</h4>
  	 			<ul>
				   <li><p class="big">244,2nd,FLOOR,ROYAL ARCADE,OPP. DIPKAMAL MALL,SARTHANA JAKATNAKA,SURAT-395006</p></li>
				   <li><a><FaPhoneAlt/> 9876543210</a></li>
				   <li><a><FaEnvelope/> 9876543210</a></li>

  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
      <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
    </div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

    </div>
  )
}
