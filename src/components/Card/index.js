import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import './index.css'
import {useNavigate} from 'react-router-dom'
import { getAllProducts } from '../../config/Api';



function Cards(){
    const navigate=useNavigate()
    const[ads,setAds]=useState([])

    useEffect(()=>{
        getData()
    },[]);

    //This ia the rigth way to Fetch data
const getData=async () =>{
    const res=await getAllProducts()
    console.log(res)
    setAds(res.products)
}
    
// Noob    function getData(){
//         fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(res=>setAds(res.products));
//     }
if(!ads){
    return <div>Loading...</div>
}
    return <div>
        <div className='card1 container'>
        {ads.map(item=> {
            const{title,description,_id,price}=item
            return <div >
            <Card style={{ width: '18rem', height:'21rem',border:'1px solid rgb(197, 197, 197)'}} onClick={()=>navigate(`detail/${_id}`)}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div style={{fontWeight:'500',fontSize:'1.2rem'}}>price :{price}$</div>
            <Card.Text>
            {description}
            </Card.Text>
        </Card.Body>
        </Card>
            </div>
        })}
        </div>


    </div>
}
export default Cards