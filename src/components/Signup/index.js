import './index.css'
import {useNavigate}from 'react-router-dom'
import { setSignUp } from '../../config/Api'
import { useState } from 'react'
function SignUp(){
    const navigate=useNavigate()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[fullname,setFullName]=useState('')

const checkSignup= async()=>{
    const res=await setSignUp({email,password,fullname})
    console.log(res)
    if(!email||!password){
        alert('Enter All Values')
        return
    }
    if (res) {
        navigate('/login');
    } else {
        alert('Invalid . Please signup again.');
    }
}
const handleNameInput=(e)=>{
    setFullName(e.target.value)
}
const handleEmailInput=(e)=>{
    setEmail(e.target.value)
}
const handlePasswordInput=(e)=>{
    setPassword(e.target.value)
}
    return <div>
        <div className="container1 container">
            <img src='https://olx1-2be1d.web.app/src/signup/sign.svg'/>
        <h3>Welcome to OLX</h3>
        <h6>The trusted community of buyers <br/> and sellers.</h6>
        <input placeholder='Enter Your Name' size={30} className='signInput' type='text' onChange={handleNameInput}/>
        <br/>
        <input size={30} placeholder='Enter Your Email' type='email'  className='signInput' onChange={handleEmailInput}/>
        <br/>
        <input size={30} placeholder='Enter Your Password' type='password'  className='signInput'  onChange={handlePasswordInput}/>
        <br/>
        <input size={30} placeholder='Enter Confirm Password' type='password'  className='signInput'/>
        <br/>
        <button className="btn" onClick={checkSignup}>Sign Up</button>
        <br/>
        <p>By continuing, you are accepting <br/>
            <span >OLX Terms of use</span> and <span style={{color:'skyblue'}}>Privacy Policy</span>
        </p>
        <p>You already have an account  <label onClick={()=>navigate('/login')} style={{color:'rgb(232, 104, 170)',fontSize:'1.1rem',cursor:'pointer'}}> Log In</label></p>
    </div>
    </div>
}

export default SignUp