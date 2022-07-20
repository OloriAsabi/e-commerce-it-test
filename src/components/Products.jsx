import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({ products, isLoading }) => {
    
  return (
    <div>
        <h1 className='text-center font-bold p-5 text-2xl'>Welcome to FakeShop</h1>

        {isLoading ? (
                <div>
                    <h3>LOADING....</h3>
                </div>
            ) : (

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-5 gap-8 justify-center items-center shadow-black'>
           {products.map((product) => (
            <div className='' key={product.id}>
                <Link to={`/product/${product.id}`}>
                <div className='w-1/2  rounded-2xl '>
                <img src={product.image} className='w-full object-cover justify-center  h-full rounded-xl' alt="Products Image"/>
                </div>
                <h2 className='text-xl text-justify text-gray-700  p-3'>{product.title}</h2>
                <h5 className='w-20 bg-white rounded text-center text-xl p-1 font-extrabold m-3 text-black '>${product.price}</h5>
                </Link>
            </div>
           ))}
        </div>
      )}
    </div>
  )
}

export default Products