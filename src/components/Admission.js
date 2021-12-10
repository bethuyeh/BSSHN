import React from 'react'
import './Registration.css'

const Admission = () => {
    return (
        <body>
            <div className="container">
    <div className="title">Admission</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Phone/Patient No. or Surname</span>
            <input type="text" placeholder="Enter appropriate detail" required/>
          </div>

          <div className="input-box">
            <span className="details">Assign Ward</span>
            <input type="text" placeholder="Enter Ward" required/>
          </div>

          <div className="input-box">
            <span className="details">Assign Bed</span>
            <input type="text" placeholder="Enter Bed" required/>
          </div>
        </div>
          
          <div className="title" >Recurrent Entries </div>
          <div className="user-details" style={{borderBottom: "3px solid #028A0F"}}>
          <div className="input-box">
            <span className="details">Vitals</span>
            <input type="text" placeholder="Enter Vitals" required/>
          </div>

          <div className="input-box">
            <span className="details">Medications Administered</span>
            <input type="text" placeholder="Enter Medications" required/>
          </div>
        
          <div className="input-box">
            <span className="details">Queue for In-patient Services</span>
            <input type="text" placeholder="Enter queue number" required/>
          </div>
        </div>

        
        <div className="user-details">
         
        <div className="input-box">
        <span className='details'>
          <input type="radio" name="gender" id="dot-3"/>
          <input type="radio" name="gender" id="dot-4"/>
          <span className="gender-title">Discharged</span>
          <div className="category">
            <label for="dot-3">
            <span className="dot three"></span>
            <span className="gender">Yes</span>
          </label>
          <label for="dot-4">
            <span className="dot four"></span>
            <span className="gender">No</span>
          </label>
          
          </div>
          </span>
        </div>


          <div className="input-box">
            <span className="details">Remarks</span>
            <input type="text" placeholder="" required/>
          </div>
        </div>
        
        <div className="button">
          <input type="submit" value="Enter"/>
        </div>
      </form>
    </div>
  </div>
        </body>
    )
}

export default Admission
