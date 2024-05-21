import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='my-20 flex flex-col justify-center items-center'>
        <form
            className='flex flex-col items-center justify-center'
        >
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <input
                type='text'
                placeholder='Username'
                name='username'
                className='border border-black rounded-sm py-1 px-2 my-2'
                required
                value={username}
                onChange={null}
            />

            <input 
                type='password'
                placeholder='Password'
                name='password'
                className='border border-black rounded-sm py-1 px-2 my-2'
                required
                value={password}
                onChange={null}
            />

            <button
                type='submit'
                className='border border-black rounded-md px-2 py-1 mx-2 bg-black text-white hover:text-black hover:bg-white duration-75'
            >
                Sign Up
            </button>
        </form>
        <div className='my-3'>
            <Link to='/login'>
                Already Registered? Click Here to Log In
            </Link>
        </div>
    </div>
  )
}

export default Signup