import React from 'react'

export default function About() {
  return (
    <div>
      <div className='abt-container'>
        <h1>About Us</h1>
      </div>
      
      <div className='abt-sec-1'>
      <div class="abt-image-content-container">
    <div class="abt-image-container">
      <img src="images/about-content.jpg" alt="Image"/>
    </div>
    <div class="abt-content-container">
      <h1>About Company</h1>
      <p>HELLO, WE ARE JAVIYA & CO. <br/>Javiya & Co. is largest online business services platform dedicated to helping people easily start and grow their business, at an affordable cost. We were started in September 2017 with the mission of making it easier for Entrepreneurs to start their business. We have since helped start and operate thousands of businesses by offering a range of business services. Our aim is to help the entrepreneur on the legal and regulatory requirements, and be a partner throughout the business lifecycle, offering support at every stage to ensure the business remains compliant and continually growing.</p>
    </div>
  </div>
      </div>

<div className='abt-sec-2'>
  <div className='abt-sec-2-boxes'>
<div className='abt-box-1'>
<img src='images/vision.png'/>
<h4>Our Vision</h4>
<p>Our firm continuously strives to be the Premier Accounting and Consultancy firm that provides excellent service to our clients and an excellent quality of life for our associates.</p>
</div>
<div className='abt-box-2'>
<img src='images/mission.png'/>
<h4>Our Mission</h4>
<p>To achieve “Total Customer Satisfaction” by delivering quality services in professional and time-bound manner.</p>
</div>
<div className='abt-box-3'>
<img src='images/objective.png'/>
<h4>Our Objective</h4>
<p>We are committed to creating and sustaining long-term relationships which draw on our experience and expertise to help our clients achieve real success.</p>
</div>
  </div>
</div>
    </div>
  )
}
