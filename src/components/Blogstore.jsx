import React, { useEffect, useState } from 'react'
// import Blog from './Blog'
import axios from 'axios'

const Blogstore = () => {

    const [data, setData] = useState([])
    const fetchData = ()=>{
        axios.get('http://localhost:3000/blogPosts')
        .then(res=> setData(res.data))
        .catch(err=> console.log(err))
    }

    useEffect(()=>{
        fetchData()
    },[]) 

   

  return (
    <div>

        {data.map((result)=> (
            <li key={result.id} className='mt-4 bg-red-400 w-96 p-4 rounded text-xl list-none'>
                <h1>{result.title}</h1>
                <p>{result.content}</p>
                <p>{result.summary}</p>
                <button onClick={()=> Deletehandler(result.id)}>Delete</button>
                <button onClick={()=> EditHandler(result.id)}>Edit</button>
            </li>
            )
        )}

    </div>
  ) 
}

export default Blogstore