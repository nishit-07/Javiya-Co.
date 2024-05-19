import React from 'react';
import {FaEnvelopeOpen, FaEnvelopeOpenText, FaEnvelopeSquare, FaPhoneAlt, FaRegEnvelope, FaRegEnvelopeOpen, FaWhatsapp } from 'react-icons/fa';
export default function Contact() {
  return (
    <div>
        <div className='contact-container'>
        <h1>Contact Us</h1>
        
        </div>
        <div className='contact-sec-1'>
          <h1>GET IN TOUCH</h1>
        <div className='contact-boxes'>
            <div className='contact-box-1'>
                <img src='images/telephone.png'/>
                <h3>Let's Call</h3>
                
                <button class="button-38" role="button">Call Now</button>
            </div>
            <div className='contact-box-2'>
            <img src='images/whatsapp (1).png'/>

                <h3>Let's Chat</h3>
               
                <button class="button-38" role="button">Whatsapp</button>
            </div>
            <div className='contact-box-3'>
            <img src='images/email (1).png'/>

                <h3>Let's Mail</h3>
             
                <button class="button-38" role="button">Email</button>
            </div>
          
        </div>
     
  </div>
  <div className='contact-sec-2'>
  <h2>Send as a Message  & Find Out</h2>
    <div className='contact-sec-2-container'>
      
  <div class="contact-form-container">
    <form action="mailto:nishitjarsaniya@email.com" method="post" enctype="text/plain">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>

      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required/>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>

      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <input type="submit" value="Submit"/>
    </form>
  </div>

 
     
     <div class="map-container">
    <iframe
      width="400"
      height="400"
      frameborder="0"
      style={{border:0}}
      allowfullscreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24236.731110799434!2d-74.00661017543392!3d40.71277629801336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592b0e75f645%3A0xa9e39fca2bb26d11!2sStatue%20of%20Liberty%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1645427841497!5m2!1sen!2sus"
    ></iframe>
    </div>
  </div>
     </div>
    </div>
  )
}
