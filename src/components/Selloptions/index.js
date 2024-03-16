import React from 'react'
import './index.css'
import {useNavigate}from 'react-router-dom'

function Selloptions() {
    const navigate=useNavigate()
    return (
    <div>
    <div className="main12"><img src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg" alt="" width="70"/>
    <div><button onClick={()=>navigate('/myads')}>My Ads</button></div></div>
    <div>
    <h1 style={{textAlign:'center'}}>Post Your Add</h1>
    <div className="categories container">
        <h3 id="h3">CHOOSE A CATEGORIES</h3>
        <ul>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-mobile"></i></span>Mobiles</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-car"></i></span>Vehicles</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-car"></i></span>Vehicles</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-regular fa-building"></i></span>Property-For-Sale</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-regular fa-building"></i></span>Property-For-Rent</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-industry"></i></span>Electronics & Home-Appliances</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-motorcycle"></i></span>Bikes</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-industry"></i></span>Business, Industrial & Agriculture</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-bell-concierge"></i></span>Services</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-user-doctor"></i></span>Jobs</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-crow"></i></span>Animals</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-couch"></i></span>Furniture-Home-Decor</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-shirt"></i></span>Fashion & Beauty</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-book"></i></span>Books-Sports-Hobbies</li>
            <li onClick={()=>navigate('/sellerform')}><span className="left-font"><i class="fa-solid fa-child"></i></span>Kids</li>
        </ul>
    </div></div>

    </div>
)
}

export default Selloptions
