import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = async (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password,
        }

        try {
            const response = await axios.post('/login', data);

            localStorage.setItem("access_token", response.data.access_token);
            alert('Log In Successful!')
        } catch (error) {
            console.error(error);
        }
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

  return (
    <div className='flex flex-col justify-center items-center my-20'>
        <form 
            className='flex flex-col justify-center items-center'
            onSubmit={handleLogIn}
            >
            <h1 
                className='text-3xl font-bold '
                >
                    Log In
            </h1>

            <input 
                name='username'
                type='text'
                required
                placeholder='Username'
                className='border border-black rounded px-2 py-1 my-2'
                value={username}
                onChange={handleUsernameChange}
            />

            <input 
                name='password'
                type='password'
                required
                placeholder='Password'
                className='border border-black rounded px-2 py-1 my-2'
                value={password}
                onChange={handlePasswordChange}
            />

            <button
                type='submit'
                className='border border-black rounded-md px-2 py-1 mx-2 bg-black text-white hover:text-black hover:bg-white duration-75'
            >
                Log In
            </button>
            
        </form>

        <div className='my-3'>
            <Link to='/signup'>
                Not Registered? Click here to Create An Account
            </Link>
        </div>
    </div>
  )
}

export default Login