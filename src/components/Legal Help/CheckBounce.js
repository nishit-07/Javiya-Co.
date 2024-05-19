import React from 'react'

export default function CheckBounce() {
  return (
    <div>
            <div className='CheckBounce-container'>
                <h1>Cheque Bounce Notice</h1>
            </div>

      <span className='CheckBounce-content'>
        <span className='CheckBounce-content-1'>
            <br />
        <p>This Notice is a Notice which shall be given by the unpaid Creditor (Payee) to the defaulting Debtor (Drawer) through an Advocate in case of dishonour of Cheque under section 138 of Negotiable Instrument Act. The Notice here is a sample Legal Notice issued by the Advocate of the Payee specifying a 15 days time given to the Drawer in fault to pay the unpaid Cheque amount. It further specifies that if the amount is not paid within 15 days from the receipt of the Notice, the unpaid Payee has right to file legal complaint and initiate Legal Proceeding against the defaulting Drawer.</p>
        
        <h4 style={{textDecoration:"none"}}>ALL ABOUT CHEQUE BOUNCE/DISHONOURED CHEQUE</h4>

        <h5>Parties to the Cheque:</h5>
        <p><span style={{fontWeight:'bold',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>1.Drawer :</span> The person who issues the cheque i.e ‘author of the cheque’ is called as Drawee. (Drawer could be the Debtor)</p>
        <p> <span style={{fontWeight:'bold',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>2.Payee : </span>The person to whom the amount mentioned in cheque is payable i.e the person in whose favour the cheque is drawn is called as Payee. (Payee could be the Creditor)</p>
        <p> <span style={{fontWeight:'bold',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>3.Drawee :</span>  The Bank where the Drawer has an account from which the cheque amount shall be paid i.e the bank who is directed to pay the amount is called as Drawee.</p>
        <p><span style={{fontWeight:'bold',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>4.Payee’s Bank :</span>  The Bank where the Payee has a bank account in which the cheque amount shall be deposited/credited (especially in case of crossed cheque) or the bank in which payee deposits the cheque is called as ‘Payee’s Banker’</p>
        
        <h5>What is meant by Cheque Bounce or Dishonoured Cheque?</h5>
        <p>Occurring of following event step by step amounts to Cheque Bounce or Dishonour of Cheque:</p>

        <p>1. A Drawer is liable to pay some amount to the Payee and thus draws a Cheque in name of the Payee.</p>
        <p>2. Such Notice shall be sent within 30 days of receipt of ‘Cheque Return Memo’ from the banker of the Payee</p>
        <p>3. Notice period of 15 days shall be specified in such notice sent to the Drawer.</p>
        <p>4. No offence is presumed to be committed by the Drawer if the Drawer pays off the complete amount within the said notice period of 15 days.</p>
        <p>5. If not, the Payee may choose to file a complaint in the competent court against such defaulting Drawee.</p>
        <p>6. Such complaint shall be made within one month from the expiry of 15 days prescribed in the notice.</p>
        
        <h5>Conditions necessary to prosecute the defaulting Drawer</h5>
        <p>The Drawer can be sued only in the following conditions:</p>
        <ul>
            <li>If the cheque drawn by the Drawer is on the account maintained by or in the name of the Drawer himself.</li>
            <li>If the cheque was dishonoured and returned due to ‘Insufficient funds’ in the Drawer’s account.</li>
            <li>If the amount mentioned in the cheque is for the discharge of some debt or liability of the Drawer towards the Payee.</li>
            <li>If the Drawer fails to make payment of the dishonoured cheque within 15 days from the date of receiving the written notice in this regard.</li>
            
        </ul>
        <p>Only if all the abovementioned conditions exist, the Drawer can be sued or prosecuted for dishonouring of the Cheque.</p>

        </span>
      </span>
    </div>
  )
}
