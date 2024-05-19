import React from 'react'

export default function DSC() {
  return (
    <div>
      <div className='DSC-container'>
        <h1>Digital Signature Certificate (DSC)</h1>
      </div> 

      <span className='DSC-content'>
        <span className='DSC-content-1'>
        <br />
        <p>A digital signature certificate (DSC) is a secure digital key issued by recognised Certifying Authorities (CAs) to validate the identity of the certificate holder. It contains an individual’s name, digital signature, date of issuance of the certificate and date of expiry, and the name of the CA.</p>
        
        <h4>Types of Digital Signature Certificate</h4>
        <p>There are three classes of DSC – Class 1, Class 2 and Class 3 used for different purposes based on the type of entity and need.</p>
        
        <p>Class 1:</p>
        <p>Class 1 certificate is issued to both businesses and individuals, or private subscribers, to confirm the user’s name and email id as mentioned in the consumer database. This is just a basic assurance and is usually not considered to be of major significance.</p>
        
        <p>Class 2:</p>
        <p>Similar to Class 1, Class 2 certificate is issued to both the entities – businesses and private subscribers for confirmation of information in the database. It is used during monetary transactions or to access one’s personal information, and for other transactions, where there is a substantial risk of malicious activity. Also, Class 2 is used to file various government forms in India.</p>
        
        <p>Class 3:</p>
        <p>Class 3 certificate is an upgraded version of Class 2. It is issued to individuals and organisations that want to participate in bidding for government tenders or online tenders and auctions. Sometimes the applicants may be expected to be physically present before the CAs to receive a Class 3 certificate. Class 3 signatures are relevant to environments that are prone to data theft, fraudulence and failure of security.</p>
        
        <h4>ADVANTAGE</h4>
        <ul>
            <li>Time-Saving And Cost-Saving</li>
            <li>Enhanced Security</li>
            <li>Legal Validity</li>
            <li>Global Acceptance</li>
        </ul>

            <h4 style={{textDecoration:"none"}}>DOCUMENT REQUIRED</h4>
            <h5>Indian Individuals Looking To Obtain DSC Must Submit:</h5>
            <ul>
                <li>ID proof: Passport/Driving license or any Photo Identity issued by the Govt</li>
                <li>PAN card</li>
                <li>Address proof: Aadhaar card/Voter ID/Driving license/Registration Certificate</li>
                <li>Attesting Officer proof</li>
            </ul>
            <h5>Indian Organizations Looking To Get DSC Must Submit:</h5>
            <ul>
                <li>Organizational PAN</li>
                <li>Partnership deed, if applicable</li>
                <li>List of Authorised Signatories which could be the list of Directors, Board resolution, etc.</li>
                <li>Authorised Signatory ID proof</li>
                <li>GST certificate</li>
            </ul>
        </span>
      </span>
    </div>
  )
}
