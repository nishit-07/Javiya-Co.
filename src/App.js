import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TaxtRegistration from './components/text registration/TaxtRegistration';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import GSTReg from './components/text registration/GSTReg';
import IncometaxReturn from './components/text registration/IncometaxReturn';
import TDSReturn from './components/text registration/TDSReturn';
import PanTan from './components/text registration/PanTan';
import Accounting from './components/text registration/Accounting';
import ProfessionalTax from './components/text registration/ProfessionalTax';
import TrademarkReg from './components/Start a business/TrademarkReg';
import PVTLTD from './components/Start a business/PVTLTD';
import LLP from './components/Start a business/LLP';
import OPC from './components/Start a business/OPC';
import SOLE from './components/Start a business/SOLE';
import Partnership from './components/Start a business/Partnership';
import SaleDeed from './components/Property & Personal/SaleDeed';
import GiftDeed from './components/Property & Personal/GiftDeed';
import RentAgreement from './components/Property & Personal/RentAgreement';
import LegalAffidavit from './components/Property & Personal/LegalAffidavit';
import PartnershipDeed from './components/Property & Personal/PartnershipDeed';
import PowerOFAttorney from './components/Property & Personal/PowerOFAttorney';
import UdyogAadhar from './components/Goverment Registration/UdyogAadhar';
import Shop from './components/Goverment Registration/Shop';
import IEC from './components/Goverment Registration/IEC';
import DSC from './components/Goverment Registration/DSC';
import CheckBounce from './components/Legal Help/CheckBounce';
import Mutual from './components/Legal Help/Mutual';
import Startabusiness from './components/Start a business/Startabusiness';
import Property from './components/Property & Personal/Property';
import Gov from './components/Goverment Registration/Gov';
function App() {
  return (
    <>
<Navbar/>
<Router>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/TaxtRegistration" element={<TaxtRegistration />} />
  <Route path="/GSTReg" element={<GSTReg />} />
  <Route path="/IncometaxReturn" element={<IncometaxReturn />} />
  <Route path="/TDSReturn" element={<TDSReturn />} />
  <Route path="/PanTan" element={<PanTan />} />
  <Route path="/Accounting" element={<Accounting />} />
  <Route path="/ProfessionalTax" element={<ProfessionalTax />} />
  <Route path="/TrademarkReg" element={<TrademarkReg />} />
  <Route path="/PVTLTD" element={<PVTLTD />} />
  <Route path="/LLP" element={<LLP />} />
  <Route path="/OPC" element={<OPC />} />
  <Route path="/SOLE" element={<SOLE />} />
  <Route path="/Partnership" element={<Partnership />} />
  <Route path="/SaleDeed" element={<SaleDeed />} />
  <Route path="/GiftDeed" element={<GiftDeed  />} />
  <Route path="/RentAgreement" element={<RentAgreement  />} />
  <Route path="/LegalAffidavit" element={<LegalAffidavit  />} />
  <Route path="/PartnershipDeed" element={<PartnershipDeed  />} />
  <Route path="/PowerOFAttorney" element={<PowerOFAttorney  />} />
  <Route path="/UdyogAadhar" element={<UdyogAadhar  />} />
  <Route path="/Shop" element={<Shop  />} />
  <Route path="/IEC" element={<IEC  />} />
  <Route path="/DSC" element={<DSC  />} />
  <Route path="/CheckBounce" element={<CheckBounce  />} />
  <Route path="/Mutual" element={<Mutual />} />
  <Route path="/Startabusiness" element={<Startabusiness />} />
  <Route path="/Property" element={<Property />} />
  <Route path="/Gov" element={<Gov />} />

  
  
   
  </Routes>
</Router>

<Footer/>
<div class="floating-buttons">
    <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" class="whatsapp-button">
      <img src="images/whatsapp (1).png" alt="WhatsApp"/>
    </a>
    <a href="tel:+123456789" class="call-button">
      <img src="images/telephone.png" alt="Call"/>
    </a>
  </div>
    </>
  );
}

export default App;
