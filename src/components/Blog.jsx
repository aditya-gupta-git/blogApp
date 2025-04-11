import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Blog = () => {


    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [summary, setSummary] = useState("")
    // const [summary, setSummary] = useState("")
    


    const [data, setData] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3000/blogPosts')
      .then((res)=> {
        setData(res.data)
      })

      .catch(err => console.log(err))


    },[])


    function AddBlog(event) {
      event.preventDefault();

      const newBlog = {title, summary, content}

      if(!title || !summary || !content){
         alert("fill All fields")
         return

      }

      axios.post('http://localhost:3000/blogPosts', newBlog)
      .then(() => {
        setData([...data, res.data])
        setTitle(""); // clear fields
        setContent("");
        setSummary("");
      })
      .catch(err => console.log(err));


    }

  return (
    <div className=' pt-4 '>

       <div className='flex flex-col px-24 gap-2  '>
        <input type="text" placeholder='title' value={title} className='outline-1 px-4 py-2'   onChange={(e)=> setTitle(e.target.value)} />
        <input type="text" placeholder='summary' value={summary} className='outline-1 px-4 py-2'  onChange={(e)=> setSummary(e.target.value)} />
        <input type="text" placeholder='content' value={content}  className='outline-1 px-4 py-2' onChange={(e)=> setContent(e.target.value)} />
        <button onClick={AddBlog}>Add Blog</button>


       </div>


      {data.map((result, index)=>(
        <div className='mt-4 bg-red-400 w-96 p-4 rounded text-xl  '>
          <h1>{result.title}</h1>
          <h1>{result.content}</h1>
          <h1>{result.summary}</h1>
          <button>Delete</button>

        </div>
      ))}



    </div>
  )
}

export default Blog