import React from 'react'

export default function PanTan() {
  return (
    <div>
      <div className='PanTan-container'>
        <h1>TDS Return Filing </h1>
        
        </div>
        <span className='PanTan-content'>
        <span className='PanTan-content-1'>
            <h4>PAN Number</h4>
            <p>PAN is very essential for all entities and individuals. It is not just used by the Income Tax Authority for tracking tax payments but has now become mandatory for many day to day transactions. To start a new bank account or even an account on investment platforms like Groww, PAN card is needed.</p>
        
            <h5>ADVANTAGES</h5>
            <ul>
                <li>IT Returns Filing</li>
                <li>Identity Proof</li>
                <li>Tax Deductions</li>
                <li>Claiming Income Tax Refund</li>
                <li>Starting a Business</li>
                <li>Opening a Bank Account</li>
                <li>Opening Demat Account</li>
                <li>Purchase & Sale of Immovable Assets</li>
                <li>Foreign Travel</li>
                <li>Time Deposit</li>
                <li>Hotel and Restaurant Bills</li>
                <li>Cash Cards and Pre-Paid Instruments</li>
                <li>Purchase or Sale of Goods and Services</li>
                <li>Bank Drafts, Pay Orders and Banker's Cheque</li>
            </ul>
        </span>
        <span className='PanTan-content-2'>
            <h4>Who Can Hold a PAN Card?</h4>
            <p>Following entities can have a PAN card:</p>

            <table>
    <thead>
      <tr>
        <th style={{fontWeight:'bolder'}}>Category</th>
        <th style={{fontWeight:'bolder'}}>Signatory</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Individual</td>
        <td>Self</td>
      </tr>
      <tr>
        <td>HUF</td>
        <td>Self</td>
      </tr>
      <tr>
        <td>Company</td>
        <td>Director</td>
      </tr>
      <tr>
        <td>Firm/LLP</td>
        <td>Partner</td>
      </tr>
      <tr>
        <td>AOP/BOI</td>
        <td>Authorised Signatory</td>
      </tr>
    </tbody>
  </table>
        </span>
        <span className='PanTan-content-3 '>
            <h4>TAN Number</h4>
            <p>TAN is a Tax Deduction and Collection Account Number, which needs to be obtained by individuals or entities, who are mandated by the government to deduct or collect tax. Quoting your TAN in TDS or TCS return, payment, certificates, Annual Information Return and other documents is mandatory, else you may incur penalties.</p>
        <br/>
        <h4>What is the structure of TAN?</h4>
        <p>As a 10-digit alpha-numeric identifier, TAN has a unique structure. With the first four letters at the beginning, TAN has five numerals in the middle and a letter at the end. The components of TAN represent the following:</p>
        <ul>
            <li>The first three letters represent the jurisdiction where the TAN was issued.</li>
            <li>The fourth alphabet in the TAN is the initial letter of the name of the individual or entity deducting or collecting tax</li>
            <li>The remaining six characters (five numerals and the last alphabet) are system-generated.</li>
        </ul>
        </span>
        <span className='PanTan-content-4'>
            <h4>What is the importance of TAN?</h4>
            <p>As a 10-digit alpha-numeric identifier, TAN has a unique structure. With the first four letters at the beginning, TAN has five numerals in the middle and a letter at the end. The components of TAN represent the following:</p>
            <ul>
                <li>The first three letters represent the jurisdiction where the TAN was issued</li>
                <li>The fourth alphabet in the TAN is the initial letter of the name of the individual or entity deducting or collecting tax</li>
                <li>The remaining six characters (five numerals and the last alphabet) are system-generated.</li>
            </ul>
            <br />
            <h4>What happens if you default?</h4>
            <p>Section 272BB of the Income Tax Act 1961 provides for a penalty of Rs. 10,000 in case the entity or individual collecting or deducting tax,fail to get the TAN or furnishes incorrect TAN details on the required documents.</p>
            <ul>
                <li>Challans for payment of TDS/TCS</li>
                <li>TDS/TCS certificates</li>
                <li>Other documents, as prescribed</li>
            </ul>
       </span>
        </span>
    </div>
  )
}
