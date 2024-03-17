import React from 'react'
import './index.css'
import{useNavigate}from 'react-router-dom'
import { postAd } from '../../config/Api'
import { useState } from 'react'
import {useSelector} from 'react-redux'

function Sellerform() {
    const navigate=useNavigate()
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[brand,setBrand]=useState('')
    const[price,setPrice]=useState('')
    const [image,setImage]=useState(null)
    const[location,setLocation]=useState('')

    const userToken=useSelector(state=>state.userReducer.token)
    console.log("Token:", userToken);

    const onSubmit = async () => {
        try {
    if (!title || !description || !brand || !price || !location) {
            alert('Please fill in all fields');
            return;
        }

        const ad = {
            title,
            description,
            brand,
            price,
            image,
            location,
            userToken
        };
        console.log("Ad data:", ad);
        const res = await postAd(ad);
        console.log(res);
        if (res) {
            if(res.message !== 'Your Ad Posted Successfully'){
                alert(res.message)
                navigate('/');
                return
            }
        } else {
            alert('Failed to post your Ad. Please try again later.');
        }
        } catch (error) {
alert('An error occurred while posting your Ad. Please try again later.');
        }
    };
    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value)
    }
    const handleBrand=(e)=>{
        setBrand(e.target.value)
    }
    const handlePrice=(e)=>{
        setPrice(e.target.value)
    }
    const handleImage=(e)=>{
        setImage(e.target.files[0])
    }
    const handleLocation=(e)=>{
        setLocation(e.target.value)
    }
return (
    <div>
    <div id="add_cart">
    <h4 style={{textAlign:'center',fontSize:'2rem',fontWeight:'800'}}>POST YOUR AD</h4>
    <div className="container des1">
        <h5>SELECTED CATEGORY</h5>
    </div>
    <div className="container des2">
        <h5>INCLUDE SOME DETAILS</h5>
        <p>Add title</p>
        <input type="text"  style={{padding:'10px',width:'100%'}} onChange={handleTitle}/>
        <p>Mention the key features of your item (e.g. brand, model, age, type)</p>
        <p>Description</p>
        <input type="text" style={{padding:'4vw 4vw',width:'100%'}} onChange={handleDescription}/>
        <p>Include condition, features and reason for selling</p>
        <p>Brand</p>
        <input type="text" style={{padding:'10px',width:'100%'}} onChange={handleBrand}/>
    </div>
    <div className="container des3">
        <h5>SET A PRICE</h5>
        <p>Price</p>
        <input type="text" style={{padding:'10px',width:'100%'}} placeholder="Rs" required onChange={handlePrice}/>
    </div>
    <div className="container des4">
        <h5>UPLOAD UP TO 4 PHOTOS</h5>
        <div style={{display:'flex',rowGap:'10px',flexWrap:'wrap'}}>
            <div className="sub"><img src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"  width={100}/> <input onChange={handleImage} type="file" name="upload"/></div>
            <div className="sub"><img src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"   width={100}/><input type="file" name="upload"/></div>
            <div className="sub"><img src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"   width={100}/><input  type="file" name="upload"/></div>
            <div className="sub"><img src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"   width={100}/><input  type="file" name="upload"/></div>
        </div>
        <p>For the cover picture we recommend using the landscape mode.</p>
    </div>
    <div className="container des2">
        <h5>YOUR AD'S LOCATION</h5>
        <p>Location</p>
        <input type="text"  style={{padding:'10px',width:'100%'}} onChange={handleLocation}/>
</div>
<div className="container des5">
    <button onClick={onSubmit}>Post now</button>
</div>
</div>
</div>
)
}
export default Sellerform