import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="w-full bg-black sticky h-20 flex dark:text-white dark:bg-white justify-between items-center p-4 shadow-black">
        <div className="flex-start justify-center items-center">
        <a href="/">
        <h1 className=" text-start object-cover dark:text-black text-white dark:bg-white rounded-none cursor-pointer">Fake Shop</h1>
        </a>
      </div>
      <ul className="text-white nav-list flex font-bold list-none dark:text-black flex-row justify-evenly items-center">
      <li className='mx-4 active:text-[#ededed] cursor-pointer dark:text-black my-2 text-lg'>
              <a  href='/' >
                 Home
             </a>
              </li>   
              <li className='mx-4 active:text-[#ededed] cursor-pointer  dark:text-black my-2 text-lg'>
              <a  href='/' >
                Products
             </a>
              </li>   
              </ul>
        </nav>
    </div>
  )
}

export default Navbar