import React from 'react'
import useProducts from '../hooks/useProducts'
import ProductCard from '../Components/ProductCard'

const Products = () => {
  const { products } = useProducts()
  return (
    <div>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>All Products</h1>
        <button className='btn btn-outline'>Search</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Hello />
    </div>
  )
}

export default Products
