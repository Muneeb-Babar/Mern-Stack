import './index.css'
import {useNavigate} from 'react-router-dom'
import { setLogin } from '../../config/Api'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { updateUser,setToken } from '../../Store/userSlice'

function Login(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const checkLogIn=async()=>{
try{
    const res=await setLogin({email,password})
    console.log(res)
    if(!email||!password){
        alert('Enter All Values')
        return
    }
    if (res) {
        dispatch(updateUser(email))
        dispatch(setToken({ token: res.token }));
        alert('Logged in Successgully')
        navigate('/');
    } else {
        alert('Invalid . Please login again.');
    }
}
    catch(e){
    alert(e.mesage)
    } 
}
const handleUserInput = (e) => {
    setEmail(e.target.value)
}

const handlePasswordInput = (e) => {
    setPassword(e.target.value)
}

    return <div>
        <div className="container1 container">
            <img src='https://olx1-2be1d.web.app/src/signup/sign.svg'/>
        <h3>Welcome to OLX</h3>
        <h6>The trusted community of buyers <br/> and sellers.</h6>
        <input size={30} placeholder='Enter Your Email' className='logInput' type='email' onChange={handleUserInput}/>
        <br/>
        <input size={30} placeholder='Enter Your Password' className='logInput' type='password' onChange={handlePasswordInput}/>
        <p style={{cursor:'pointer'}}  onClick={()=>navigate('/forgetpassword')}>Forget Password</p>
        <button className="btn" onClick={checkLogIn}>Login</button>
        <br/>
        <p>By continuing, you are accepting <br/>
            <span >OLX Terms of use</span> and <span style={{color:'skyblue'}}>Privacy Policy</span>
        </p>
        <p>You already have an account  <label onClick={()=>navigate('/signup')} style={{color:'rgb(232, 104, 170)',fontSize:'1.1rem',cursor:'pointer'}}> Sign up</label></p>
    </div>
    </div>
}
export default Login