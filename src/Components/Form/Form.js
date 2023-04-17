import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Form.scss'
function Form() {
    const [step1,setStep1]=useState(false);
    const [step2,setStep2]=useState(false);
    const [step3,setStep3]=useState(false);
    const [name,setName] = useState("Dragons Game")

    if(step3 == true)    // On Completing all the steps
    return (
        <>
            <Navbar/>
            <div className="formContainer">
                <div className="successMessage">
                    <div className="step">
                        Voila !
                    </div>
                    <div className="label">
                        The app is ready to download
                    </div>
                    <div className="button heroButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" style={{marginRight:"20px"}} class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg>
                        Download
                    </div>
                </div>
                <div className="icon">
                    <div className="appIcon download"></div>
                    <div className="appName">{name}</div>
                </div>
            </div>
        </>
    )
  return (
    <>
    <Navbar/>
    {!step3 && <div className='formContainer'>
    {!step1 &&    //  Step 1 Form 
        <div className="form">
            <div className="step">
                STEP 1 of 3
            </div>
            <div className="label">
                Enter the name of your app
            </div>
            <div className="s1">
            <input type="text" className='inputText' placeholder='e.g. Dragons' onChange={(e)=>setName(e.target.value)} value={name==="Dragons Game"?"":name}/>
            <div className="next button" onClick={()=> setStep1(true)} >
                NEXT
            </div>
            </div>
        </div>
    }
    {
        step1 && !step2 &&   // Step 2 Form
        <div className="form">
            <div className="step">
                STEP 2 of 3
            </div>
            <div className="label">
                Upload Files
            </div>
            <div className="s2">
            <div className="allFile">
            <div class="file-input">
            <input type="file" name="file-input" id="file-input" class="file-input__input"/>
            <label class="file-input__label" for="file-input">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload" class="svg-inline--fa fa-upload fa-w-16"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path  fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 209 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
            </svg>
            <span>Upload CSV file for Story</span></label>
            </div>
            <div class="file-input">
            <input type="file" name="file-input" id="file-input" class="file-input__input"/>
            <label class="file-input__label" for="file-input">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload" class="svg-inline--fa fa-upload fa-w-16"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path  fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 209 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
            </svg>
            <span>Upload Game Assets</span></label>
            </div>
            </div>
            <div className="buttons">
            <div className="button previous"onClick={()=> setStep1(false)}>
                Previous
            </div>
            <div className="next button" onClick={()=> setStep2(true)}>
                NEXT
            </div>
            </div>
            </div>
        </div>
    }
    {
        step1 && step2 && !step3 &&   // Step 3 Form
        <div className="form">
            <div className="step">
                STEP 3 of 3
            </div>
            <div className="label">
                Upload the icon for your app
            </div>
            <div className="s3">
            <div class="file-input">
            <input type="file" name="file-input" id="file-input" class="file-input__input"/>
            <label class="file-input__label" for="file-input">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload" class="svg-inline--fa fa-upload fa-w-16"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path  fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 209 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
            </svg>
            <span>Upload App Icon</span></label>
            </div>
            </div>
            <div className="buttons">
            <div className="button previous"onClick={()=> {setStep2(false) }}>
                Previous
            </div>
            <div className="next button" onClick={()=> setStep3(true)}>
                NEXT
            </div>

            </div>
        </div>
    }

        <div className="icon">
            <div className="appIcon"></div>
            <div className="appName">{name}</div>
        </div>
    </div>
    } 
    </>
  )
}

export default Form