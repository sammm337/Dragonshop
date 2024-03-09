import React from 'react';
import ReactDOM from 'react-dom/client';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './shop';
import Products from './shop/product-list';
import Cart from './shop/cart';
import AdminAddProduct from './admin/add-product';
import AdminProduct from './admin/product-list';
import Navigation from './Navbar/Navigation';
import Order from './shop/order';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
    
  },
  {
    path:"/products",
    element:<Products/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/admin/add-product",
    element:<AdminAddProduct/>
  },
  {
    path:"/admin/product-list",
    element:<AdminProduct/>
  },
  {
    path:"/navigation",
    element:<Navigation/>
  },
  {
    path:"/order",
    element:<Order/>
  }



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
   {/* <Cart/> */}
  </React.StrictMode>
);


