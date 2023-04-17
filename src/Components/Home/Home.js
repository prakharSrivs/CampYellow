import React from 'react'

import './Home.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
function Home() {
  return (
    <div className='homeContainer'>
        <Navbar/>
        <div className="content">
            <div className="displayText">
                Create Games <br/> in 3 clicks
            </div>
            <Link to='/form' className='center'>
            <div className="button heroButton">
                Click to Create
            </div>
            </Link>
            <div className="help helpMobile">
                HELP
            </div>
        </div>
    </div>
  )
}

export default Home