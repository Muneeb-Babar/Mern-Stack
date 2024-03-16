

import React from 'react'
import {useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch}from 'react-redux'
import { removeCart } from '../../Store/cartSlice';

function Cart() {
    const dispatch=useDispatch()
    const mainCart=useSelector(state => state.cartReducer.cart)
console.log('cart',mainCart)

const handleRemove=(index)=>{
    dispatch(removeCart({
        index:index
    }))
}
return (
    <div  className='container' style={{display:'flex',justifyContent:'space-evenly',gap:'20px' }}>
        {mainCart.map((item,index) => {
        const {image,brand,price}=item
            return <div>
    <div>
    <Card style={{ width: '15rem', height:'18rem' }}>
    <Card.Body>
    <img src={image} width={'120px'}/>
        <Card.Title>{brand}</Card.Title>
        <Card.Title>Rs-{price}$</Card.Title>
        <Card.Text>
        </Card.Text>
        <button style={{border:'none',padding:'6px 14px',borderRadius:'20px'}} onClick={()=>handleRemove(index)}>Remove Cart</button>
    </Card.Body>
    </Card>
    </div>
    </div>
})}
</div>
)
}

export default Cart
