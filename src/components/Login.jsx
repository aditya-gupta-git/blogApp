import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate =  useNavigate()

    function Loginhandler(){
        if(!username || !password ){
            setError("Please filled both field")
            return
        }
        axios.get('http://localhost:3000/users', {
            params: {username, password}
        })

        .then((res)=> {
            if(res.data.length > 0){
                localStorage.setItem("isloggedIn", "true"); 
                navigate('/Blog') 
            }

            else{
                setError('Invalid Cradientiel')
            }
        })

        .catch((err)=>{
            console.error(err)
            setError("Try again")
            
        })

        function logout(){
            localStorage.removeItem("isloggedIn")
            navigate("/")
        }

        // .then(()=> navigate('/Blog'))
        // .catch(err=> console.log(err))

        
       

    }

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='h-96 w-1/4 shadow-md shadow-black flex flex-col px-20 gap-8 py-8 rounded-lg'>
            <p className='text-center'>{error ? <p className='text-red-500'>{error}</p> : null  }</p>
            <input type="text" placeholder='username' onChange={(e)=> setUsername(e.target.value)} value={username} className='outline-1' />
            <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} value={password} className='outline-1' />
            <button onClick={Loginhandler} className='border-1'>Login</button>
            <p>Don't have an Account <a href="/register" className='text-blue-500'>Signup</a> </p>
        </div>
    </div>
  )
}

export default Login