// import React from 'react'
// import '/Users/samruddhishinde/Desktop/react-node/client/src/css/product.css'
// import{useState,useEffect} from 'react'
// function Products() {
 
//     const [prods, setProds] = useState([]);

//     useEffect(() => {
//       fetch('/api/getProducts', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       })
//         .then(res => res.json())
//         .then(data => {
//           setProds(data.products);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//       }, []);
     
  
  
//     return (
//       <div>
//         <main>
//           {prods.length > 0 ? (
//             <div className="grid">
//               {prods.map((product) => (
//                 <article key={product.id} className="card product-item">
//                   <header className="card__header">
//                     <h1 className="product__title">{product.title}</h1>
//                   </header>
//                   <div className="card__image">
//                     <img src={product.imageUrl} alt={product.title} />
//                   </div>
//                   <div className="card__content">
//                     <h2 className="product__price">${product.price}</h2>
//                     <p className="product__description">{product.description}</p>
//                   </div>
//                   <div className="card__actions">
//                     <button className="btn">Add to Cart</button>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <h1>No Products Found!</h1>
//           )}
//         </main>
//       </div>
//     );
//   }
  


// export default Products
