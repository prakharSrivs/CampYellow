import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
    const [modal,setModal] = useState(false);
    document.onClick = function(){
       console.log("Clicked");
    }
  return (
    <>
    { modal && 
        <div>
        <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close" onClick={() => setModal(false)}>&times;</span>
            <p>Some Tutorial Video for Help</p>
        </div>
        </div>
        </div>
    }
    <div className="navbar">
    <div className="navbarLogo" onClick={() => navigate("/")}>
        WURI
    </div>
    <div className="help" onClick={()=>setModal(true)}>
        HELP
    </div>
    </div>
    </>
  )
}

export default Navbar