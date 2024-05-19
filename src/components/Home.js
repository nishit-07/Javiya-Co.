import React, { useState, useEffect,useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {

  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  const sliderRef1 = useRef(null);

  const settings1 = {
    fade: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    dots:false
  };
    
    
  

 
  return (
    <div>
<div className="slider-container">
<Slider ref={sliderRef1} {...settings1}>
        <div>
          <img src="images/Untitled-1.png" alt="Abstract 1" />
        </div>
        <div>
          <img src="images/Untitled-2.png" alt="Abstract 2" />
        </div>
        <div>
          <img src="images/Untitled-3.png" alt="Abstract 3" />
        </div>
        
      </Slider>
    </div>

     <div className='home-sec-1'>
      <h2>OUR SERVICES AT A GLANCE</h2>
      <div className='home-content'>
        <div className='home-content-1'>
          <img src='images/books.png'/>
          <h4>Tax Registration</h4>
          <p>Our tax advice is provided both on a stand-alone basis on complex issues and also as part of structuring corporate transactions and You are</p>
          <a  style={{textDecoration:"none",color:"black",fontFamily:"font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"}} href='/TaxtRegistration'>Read More...</a>
        </div>
        <div className='home-content-2'>
          <img src='images/business.png'/>
          <h4>Start a Business</h4>
          <p>Starting a business in India takes 15 to 30 days, depending on whether you choose a private limited company, one-person company (OPC), limited</p>
          <a style={{textDecoration:"none",color:"black",fontFamily:"font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"}} href='/Startabusiness'>Read More...</a>
        </div>
        <div className='home-content-3'>
          <img src='images/property.png'/>
          <h4>Property & Personal</h4>
          <p>We have helped thousands of people draft their own agreements and contracts, saving ample time and money. Our ready-to-customize templates</p>
          <a style={{textDecoration:"none",color:"black",fontFamily:"font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"}} href='/Property'>Read More...</a>
        </div>
        <div className='home-content-4'>
          <img src='images/registration.png'/>
          <h4>Government Registration</h4>
          <p>Start a business in India by obtaining all the Government licenses and registrations online at chaludiya.com</p>
          <a style={{textDecoration:"none",color:"black",fontFamily:"font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"}} href='/Gov'>Read More...</a>
        </div>
      </div>

      <div className='home-content-sec-2'>
        
        

      </div>
     </div>

     <section class="home-section-3">
    <div class="image-container">
      <img src="images/tax1.jpg" alt="Image Description"/>
    </div>
    <div class="h-sec-3-content-container">
      <div class="h-sec-3-content">
        <h2>HELLO, WE ARE JAVIYA & CO.</h2>
        <p>Javiya & Co. is largest online business services platform dedicated to helping people easily start and grow their business, at an affordable cost. We were started in September 2017 with the mission of making it easier for Entrepreneurs to start their business. We have since helped start and operate thousands of businesses by offering a range of business services. Our aim is to help the entrepreneur on the legal and regulatory requirements, and be a partner throughout the business lifecycle, offering support at every stage to ensure the business remains compliant and continually growing. </p>
        
        <a style={{textDecoration:"none",color:"black",fontFamily:"font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"}} href='/about'>Read More...</a>
      </div>
    </div>
  </section>

<div className='home-sec-4'>
<h2>What people say about us</h2>
<Slider ref={sliderRef} {...settings}>
 
        <div className='home-sec-4-contain-1'>
       
          <p>❝ Amazing work and very good at legal services. He provides wonderful guidance and counseling for your concern. I really recommend to approach to him for getting proper guidance and best services.❞</p>
          <h5>nishit jarsaniya</h5>
        <h6>CEO | NJ & CO.</h6>
        </div>
        
        <div className='home-sec-4-contain-2'>
        
          <p>❝ One of the best taxation firm in whole surat, very experience and talented person and all team work very good, best advisor for any profession,I recommended to all.❞</p>
          <h5>nishit jarsaniya</h5>
        <h6>CEO | NJ & CO.</h6>
        </div>
        <div className='home-sec-4-contain-3'>
          
          <p>❝ Chaludiya & Co. is proessional and value. ❞</p>
          <h5>nishit jarsaniya</h5>
        <h6>CEO | NJ & CO.</h6>
        </div>
        
      </Slider>
</div>


<div className='home-sec-5'>
<div className='home-sec-5-image'>
  <img src='images/digital-india.png'/>
  <img src='images/swachh.png'/>
  <img src='images/make.png'/>
  <img src='images/data-gov.png'/>
  <img src='images/mygov.png'/>
  <img src='images/pmoindia.png'/>
</div>
</div>
   </div>
  )
}
