import React from 'react'
import './Registration.css'

const Diagnostics = () => {
    return (
        <body>
            <div className="container">
    <div className="title">Diagnostics</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Phone/Patient No. or Surname</span>
            <input type="text" placeholder="Enter appropriate detail" required/>
          </div>

          <div className="input-box">
            <span className="details">Investigation</span>
            <input type="text" placeholder="Enter Investigation" required/>
          </div>

          <div className="input-box">
            <span className="details">Service Description</span>
            <input type="text" placeholder="Enter Service Description" required />
          </div>

          <div className="input-box">
            <span className="details">Result/Outcome</span>
            <input type="text" placeholder="Enter Result" required />
          </div>

          <div className="input-box">
            <span className="details">Remarks </span>
            <input type="text" placeholder="" required />
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

export default Diagnostics;
