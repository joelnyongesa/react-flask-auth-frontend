import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className='flex flex-row justify-center items-center h-1/2 my-20'>
        <button 
            className='border border-black rounded-md px-2 py-1 mx-2 bg-black text-white hover:text-black hover:bg-white duration-75'
        >
            <Link to='/signup'>
                Sign Up
            </Link>
        </button>

        <button 
            className='border border-black rounded-md px-2 py-1 mx-2 bg-black text-white hover:text-black hover:bg-white duration-75'
        >
            <Link to='/login'>
                Log In
            </Link>
        </button>
    </div>
  )
}

export default Home