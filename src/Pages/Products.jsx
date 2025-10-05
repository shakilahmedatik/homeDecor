import React, { useState } from 'react'
import useProducts from '../hooks/useProducts'
import ProductCard from '../Components/ProductCard'
import SkeletonLoader from '../Components/SkeletonLoader'

const Products = () => {
  const { products, loading } = useProducts()
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searchedProducts = term
    ? products.filter(product =>
        product.name.toLocaleLowerCase().includes(term)
      )
    : products

  return (
    <div>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
          All Products{' '}
          <span className='text-sm text-gray-500'>
            ({searchedProducts.length}) Products Found.
          </span>
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Products'
          />
        </label>
      </div>
      {loading ? (
        <SkeletonLoader count={16} />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {searchedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products
