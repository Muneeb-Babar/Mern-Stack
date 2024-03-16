import Carousel from 'react-bootstrap/Carousel';
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getSingleProduct } from '../../config/Api';

function DarkVariantExample() {

    const [product,setProduct]=useState([])

    const { adId } = useParams();
    
    useEffect(() => {
        getSingleAd();
    }, []);

    const getSingleAd=async()=>{
        const res=await getSingleProduct(adId)
        setProduct(res)
    }
    // const{image}=product
    
    // function getSingleAd(){
    //     fetch(`https://dummyjson.com/products/${adId}`)
    // .then(res => res.json())
    // .then(res=>setProduct(res));
    // }
    if(!product){
        return <div>Loading</div>
    }
return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={'https://images.pexels.com/photos/16603973/pexels-photo-16603973/free-photo-of-bridge-between-yildiz-park-and-ciragan-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={'https://images.pexels.com/photos/16603973/pexels-photo-16603973/free-photo-of-bridge-between-yildiz-park-and-ciragan-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={'https://images.pexels.com/photos/16603973/pexels-photo-16603973/free-photo-of-bridge-between-yildiz-park-and-ciragan-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
);
}

export default DarkVariantExample;