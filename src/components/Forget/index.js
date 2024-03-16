

import React, { useState } from 'react'
import './index.css'
import { checkPassword } from '../../config/firebase'
import {useNavigate}from 'react-router-dom'

function Forget() {
    const[email,setEmail]=useState('')
    const navigate=useNavigate()

    const  checkReset=async()=>{
        try{
            const res=await checkPassword(email)
            console.log(res)
            alert('check your Email')
            navigate('/login')
        }
        catch(e){
            console.log(e.message)
        }
    }
return (
    <div>
    <div className="container1 container">
            <img src='https://olx1-2be1d.web.app/src/signup/sign.svg'/>
        <h3>Welcome to OLX</h3>
        <h6>The trusted community of buyers <br/> and sellers.</h6>
        <input size={30} placeholder='Enter Your Email' className='logInput' type='email' onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <button className="btn" onClick={checkReset}>Reset</button>
        <br/>
        <p>By continuing, you are accepting <br/>
            <span >OLX Terms of use</span> and <span style={{color:'skyblue'}}>Privacy Policy</span>
        </p>
    </div>
    </div>
)
}

export default Forget
