import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
function Error() {
  document.body.style.backgroundColor = "#010101";
  return (
    <div className='errorContainer'>
    <div className="brandHeading navbar-brand ">
      SANGANAN PRAYOG
    </div>
    <div className="errorHeading">
        <div className="errorHeading4">
        4
        </div>     
        <div className="errorHeading0">
        0
        </div> 
        <div className="errorHeading4">
        4
        </div>
    </div>
    <div className="errorContent">
    <div className="errorContentWhite">
    SORRY, THERE'S 
    </div>
    <div className="errorContentColor">
    NOTHING HERE
    </div>
    
    </div>
    <div className="goHomeButton">
    <Link className='goHomeButton' to='/'>GO HOME</Link>
    </div>

    </div>
  )
}

export default Error