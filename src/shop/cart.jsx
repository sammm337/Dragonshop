import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const navigate=useNavigate();

  const [product,setProduct]=useState([]) 
  useEffect(()=>{
    fetch('http://10.10.15.251:5001/cart',{
      method:'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      
    }
    ).then(res=>res.json())
    .then(data=>{
    setProduct(data.products)
    })
  },[])
  function handleClick(id){
    fetch('http://10.10.15.251:5001/cart-delete-item',{
      method:'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({id})
    }
    ).then(res=>res.json())
    .then(data=>{
    //  navigate(data.redirect)
    console.log(data)
    });
    }

  return (
    <main>
      {product.length > 0 ? (
        <>
          <ul className="cart__item-list">
            {product.map((p) => (
              <li key={p.id} className="cart__item">
                <h1>{p.title}</h1>
                <h2>Quantity: {p.cartItem.quantity}</h2>
                <form action="/cart-delete-item" method="POST">
                  <input type="hidden" value={p.id} name="productId" />
                  <button className="btn" type="submit" onClick={()=>{handleClick(p.id)}}>
                    Delete
                  </button>
                </form>
              </li>
            ))}
          </ul>
          <hr />
          <div className="centered">
            <form action="/create-order" method="POST">
              <button type="submit" className="btn">
                Order Now!
              </button>
            </form>
          </div>
        </>
      ) : (
        <h1>No Products in Cart!</h1>
      )}
    </main>
  );



  
}
// fetch('http://10.10.15.251:5001/test',{
//   method:"post",
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ key: 'value' })
// }
// ).then(res=>res.json())
// .then(data=>{
// console.log(data)
// })