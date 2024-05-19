import React, { useState, useEffect } from 'react';


export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleSubMenuToggle = (id) => {
    const menuDropdown = document.getElementById(id);
  
    if (menuDropdown && window.innerWidth <= 992) {
      if (menuDropdown === activeDropdown) {
        collapseSubMenu();
      } else {
        collapseSubMenu();
        menuDropdown.classList.add('active');
  
        const subMenu = menuDropdown.querySelector('.submenu');
  
        if (subMenu) {
          subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
  
        setActiveDropdown(menuDropdown);
      }
    }
  };

  const collapseSubMenu = () => {
    if (activeDropdown) {
      activeDropdown.classList.remove('active');
      const subMenu = activeDropdown.querySelector('.submenu');
      if (subMenu) {
        subMenu.style.maxHeight = null;
      }
      setActiveDropdown(null);
    }
  };

      return (
    <div>
        <header>
    <nav>
      <div class="logo"><a href="/"><img src="images/JAVIYA___CO__1_-removebg-preview.png"/></a></div>
      <label for="menubrop" class="bartoggle">≡</label>
      <input type="checkbox" id="menubrop"/>
      <ul class="NavMenu">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About Us</a></li>
        <li><a  href='/TaxtRegistration' onClick={() => handleSubMenuToggle('droplist1')} ><label for="droplist1" class="toggle">Tax Registration</label></a>
          <input type="checkbox" id="droplist1"/>
          <ul>
            <li><a href="/GSTReg">GST Registration & Retrun Filling</a></li>
            <li><a href="/IncometaxReturn">Income Tax Return & Tax Planning</a></li>
            <li><a href="/TDSReturn">TDS Return Filing</a></li>
            <li><a href="/PanTan">PAN / TAN Registration</a></li>
            <li><a href="/Accounting">Accounting / Bookkeeping Services</a></li>
            <li><a href="/ProfessionalTax">Professional Tax Registration</a></li>
            
          </ul>
        </li>
        <li><a  onClick={() => handleSubMenuToggle('droplist2')}><label for="droplist2" class="toggle">Start a Bussiness</label></a>
          <input type="checkbox" id="droplist2"/>
          <ul>
            <li><a href="/TrademarkReg">Trademark Registration</a></li>
            <li><a href="/PVTLTD">Private Limited Company (Pvt. Ltd.)</a></li>
            <li><a href="/LLP">Limited Liability Partnership (LLP)</a></li>
            <li><a href="/OPC">One Person Company (OPC)</a></li>
            <li><a href="/SOLE">Sole Proprietorship</a></li>
            <li><a href="/Partnership">Partnership Firm</a></li>
          </ul>
        </li>
        <li><a  onClick={() => handleSubMenuToggle('droplist3')}><label for="droplist3" class="toggle">Property & Personal</label></a>
          <input type="checkbox" id="droplist3"/>
          <ul>
            <li><a href="/SaleDeed">Sale Deed (Dastavej)</a></li>
            <li><a href="/GiftDeed">Gift Deed</a></li>
            <li><a href="/RentAgreement">Rent Agreement</a></li>
            <li><a href="/LegalAffidavit">Legal Affidavit</a></li>
            <li><a href="/PartnershipDeed">Partnership Deed</a></li>
            <li><a href="/PowerOFAttorney">Power Of Attorney</a></li>
          </ul>
        </li>
        <li><a  onClick={() => handleSubMenuToggle('droplist4')}><label for="droplist4" class="toggle">Goverment Registration</label></a>
          <input type="checkbox" id="droplist4"/>
          <ul>
            <li><a href="/UdyogAadhar">Udyog Aadhar (SSI/MSME)</a></li>
            <li><a href="/Shop">Shop & Establishment (Gumasta) License</a></li>
            <li><a href="/IEC">Import Export Code (IEC)</a></li>
            <li><a href="/DSC">Digital Signature Certificate (DSC)</a></li>
          </ul>
        </li>
        {/* <li><a  onClick={() => handleSubMenuToggle('droplist5')}><label for="droplist5" class="toggle">Legal Help</label></a>
          <input type="checkbox" id="droplist5"/>
          <ul>
            <li><a href="/CheckBounce">Cheque Bounce Notice</a></li>
            <li><a href="/Mutual">Mutual Consent Divorce</a></li>
         
          </ul>
        </li> */}
        <li><a href="/Contact">Contact Us</a></li>

      </ul>
     

    </nav>
  </header>

    </div>
  )
}
