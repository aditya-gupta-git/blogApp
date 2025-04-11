import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate =  useNavigate()

   

    async function Registerhandler() {

        // Reset error
        setError("")

    
        if(!username.trim() || !email.trim() || !password.trim){
            setError("Please Filled or field")
            return
        }


        const newUser = {
            username,
            email, 
            password
        }
    

        try {
            const res = await axios.post('http://localhost:3000/users', newUser)
            console.log("Response", res)
            alert("Successfully Register")
            navigate('/')
            
        } catch (error) {
            console.log(error)
            setError('Something went wrong')
            
            
        }


   
    }

  return (
    <div className='flex items-center justify-center h-screen'>
         <div className='h-96 w-1/4 shadow-md shadow-black flex flex-col px-20 gap-8 py-8 rounded-lg'>
            <p className='text-center'>{error ? <p className='text-red-500'>{error}</p> : null  }</p>
            <input type="text" placeholder='username' onChange={(e)=> setUsername(e.target.value)} value={username} className='outline-1' />
            <input type="text" placeholder='email' onChange={(e)=> setEmail(e.target.value)} value={email} className='outline-1' />
            <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} value={password} className='outline-1' />
            <button onClick={Registerhandler} className='border-1'>Register</button>
        </div>
    </div>
  )
}

export default Register