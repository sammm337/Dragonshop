import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <header className="main-header">
  <nav className="main-header__nav">
    <ul className="main-header__item-list">
      <li className="main-header__item">
        {/* <a className="<%= path === '/' ? 'active' : '' %>" href="/">
          Shop
        </a> */}
        <Link to="/" className="">Shop</Link>
      </li>
      <li className="main-header__item">
        {/* <a
          className="<%= path === '/products' ? 'active' : '' %>"
          href="/products"
        >
          Products
        </a> */}
        <Link to="../products">Products</Link>
      </li>
      <li className="main-header__item">
        {/* <a className="<%= path === '/cart' ? 'active' : '' %>" href="/cart">
          Cart
        </a> */}
        <Link to="/cart">Cart</Link>
      </li>
      <li className="main-header__item">
        {/* <a
          className="<%= path === '/admin/add-product' ? 'active' : '' %>"
          href="/admin/add-product"
        >
          Add Product
        </a> */}
        <Link to="../admin/add-product">Add Products</Link>
      </li>
      <li className="main-header__item">
        {/* <a
          className="<%= path === '/admin/products' ? 'active' : '' %>"
          href="/admin/products"
        >
          Admin Products
        </a> */}
        <Link to="../admin/product-list">Admin Products</Link>
      </li>
    </ul>
  </nav>
</header>

  )
}
