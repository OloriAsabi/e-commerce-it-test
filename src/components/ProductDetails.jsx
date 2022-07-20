import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductId } from '../api/api'

const ProductDetails = () => {
    const { id }  = useParams();
    const [product, setProduct] = useState({})
     const history =  useNavigate();

    useEffect(() => {
        getProductId(id).then((data) => {
            console.log(data)
            const items = data.data
            setProduct(items);
        });
    },[id]);

  return (
    <div className='container'>
        <div className='block text-center m-10'>
        <button className='text-white w-20 bg-black rounded items-center cursor-pointer text-center text-xl p-2 font-extrabold m-3 ' onClick={() => history('/')}>
        Back
        </button>
        </div>
            <div className='flex small justify-between'>
            <div className='w-screen'>
            <img src={product.image} className="w-full object-cover " alt="Products Image"/>
            </div>
             <div className='w-full h-full p-5'>
            <h2 className='text-3xl text-justify text-gray-700 '>{product.title}</h2>
            <div className='bg-white rounded text-center text-2xl p-1 font-extrabold m-3 text-black '>${product.price}</div>
            <div>
                <div className='flex justify-start text-center'>
                    <h5 className='mt-2 pr-3 pt-3 pt-3 pb-3'>Category:  </h5>
                    <button className='text-white w-48 bg-black rounded  p-3 font-extrabold '>{product.category}</button>
                </div>
                <div className='flex justify-start text-center'>
                    <h5 className='mt-2 pr-4 pt-3 pt-3 pb-3'>Rating:      </h5>
                    <button className='text-white bg-black rounded items-center text-center text-xl p-3 font-extrabold m-3'>{product.rating?.rate}</button>
                </div>
                <div className='flex justify-start text-center'>
                    <h5 className='mt-2 pr-6 pt-3 pt-3 pb-3'>Count:      </h5>
                    <button className='text-white bg-black rounded items-center text-center text-xl p-3 font-extrabold m-3'>{product.rating?.count}</button>
                </div>
            </div>
            <p className='text-justify text-xl pt-5'>{product.description}</p>
            </div>
         </div>
    </div>
  )
}

export default ProductDetails