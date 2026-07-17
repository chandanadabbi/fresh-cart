import React from 'react'
import "./ProductCard.css"

function ProductCard({name,price,image,onAddToCart}) {
  return (
    <div className='product-card'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className='price'>₹{price}</p>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  )
}

export default ProductCard
