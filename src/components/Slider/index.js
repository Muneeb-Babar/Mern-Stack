import Carousel from 'react-bootstrap/Carousel';
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getSingleProduct } from '../../config/Api';

function DarkVariantExample() {

    const [product,setProduct]=useState()

    const { adId } = useParams();
    
    useEffect(() => {
        getSingleAd();
    }, []);

    const getSingleAd=async()=>{
        const res=await getSingleProduct(adId)
        setProduct(res)
    }
    // const{image}=product
    if(!product){
        return <div>Loading</div>
    }
return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
        <img
        className="d-block"
        src={product.singleProduct.image} width='100%' height={350}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={product.singleProduct.image}width='100%' height={350}
        alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={product.singleProduct.image}width='100%' height={350}
        alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
);
}

export default DarkVariantExample;