import React from 'react'
import { useEffect } from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

// import '/Users/samruddhishinde/Desktop/react-node/client/src/css/main.css'


function Index() {
  const [prods, setProds] = useState([]);
  const navigate=useNavigate()
  // const[added,setAdded]=useState([])
function handleClick(id){
fetch('http://10.10.15.251:5001/cart',{
  method:'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify({id})
}
).then(res=>res.json())
.then(data=>{
 navigate(data.redirect)
});
}

  useEffect(() => {
    fetch('http://10.10.15.251:5001/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        setProds(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }, []);
   


  return (
    <div>
      <main>
        {prods.length > 0 ? (
          <div className="grid">
            {prods.map((product) => (
              <article key={product.id} className="card product-item">
                <header className="card__header">
                  <h1 className="product__title">{product.title}</h1>
                </header>
                <div className="card__image">
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                <div className="card__content">
                  <h2 className="product__price">${product.price}</h2>
                  <p className="product__description">{product.description}</p>
                </div>
                <div className="card__actions">
                  <button className="btn" onClick={()=>{handleClick(product.id)}}>Add to Cart</button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <h1>No Products Found!</h1>
        )}
      </main>
    </div>
    
  );
}



export default Index
