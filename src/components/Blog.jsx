import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Blog = () => {

    function Edithandler(id){
      data.find((item=> item.id === id))
    }



    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [summary, setSummary] = useState("")
    const [edit, setEdit] = useState(null)
    // const [summary, setSummary] = useState("")
    
    const Navigate = useNavigate()

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
         toast("fill All fields")
         return

      }


      axios.post('http://localhost:3000/blogPosts', newBlog)

      .then((res) => {

        toast("Blog added successfully")

        setData([...data, res.data])
        setTitle(""); // clear fields
        setContent("");
        setSummary("");

      })

      .catch(err => console.log(err));


      // Navigate('/Blogstore')

    }

    // function Deletehandler(id){
    //   const updatedData = data.filter((item)=> {item.id !== id})
    //   setData(updatedData)
    // }
 
    // const Deletehandler = async (id) => {
    //   try {
    //     await axios.delete(`http://localhost:3000/blogPosts/${id}`)
    
    //     // Filter from the local state
    //     const updated = data.filter(item => item.id !== id)
    //     setData(updated)
    
    //   } catch (error) {
    //     console.error("Delete failed:", error)
    //   }
    // }

    function Deletehandler(id){
      axios.delete(`http://localhost:3000/blogPosts/${id}`)
      .then(()=>{
        setData(data.filter((data)=>(
              data.id !== id
        )))
      })
    }

    // function Edithandler(id){
    //   const blogEdit = data.find((item)=> item.id === id)
    //   setTitle(blogEdit.title)
    //   setContent(blogEdit.content)
    //   setSummary(blogEdit.summary)
    //   setEdit(id) 
    // }


    // function SaveEdit(e){
    //   e.preventDefault() 
      
    //   const updatedData = {title, summary, content}

    //   axios.put(`http://localhost:3000/blogPosts/${edit}`, updatedData)
    //   .then((res)=>{
    //     const updateddtaaa =  data.map((data)=> data.id === edit ? res.data : data)
    //     setData(updateddtaaa)


    // })

    // }





    function Edithandler(id){
      const blogEdit = data.find((item)=> item.id === id)
      setTitle(blogEdit.title)
      setContent(blogEdit.content)
      setSummary(blogEdit.summary)
      setEdit(id) 
    }     

  
    // save updated blog
    function SaveEdit (e){
      e.preventDefault()

      const updatedData ={title, summary, content}

      axios.put(`http://localhost:3000/blogPosts/${edit}`, updatedData)
      .then((res)=>{
        const updateblog = data.map((item)=> 
          item.id === edit ? res.data : item 
        )
        setData(updateblog)     
        setEdit(null)
        setTitle('')
        setContent('')
        setSummary('')
      })

      .catch((err)=> console.log(err))
    

    }

    function logout(){

      localStorage.removeItem("isloggedIn")
      Navigate('/')
    }

    
    // function Deletehandler(index){
    //   axios.delete(`http://localhost:3000/blogPosts/${index}`)
    //   .then(()=>{
    //     setData(data.filter(data=> data.id !== index))
    //   })

    // }

  return (
    <div className=' pt-4 '>
       
       <div className='flex flex-col px-32 gap-2  '>
        <input type="text" placeholder='title' value={title} className='outline-1 px-4 py-2'   onChange={(e)=> setTitle(e.target.value)} />
        <input type="text" placeholder='summary' value={summary} className='outline-1 px-4 py-2'  onChange={(e)=> setSummary(e.target.value)} />
        <input type="text" placeholder='content' value={content}  className='outline-1 px-4 py-2' onChange={(e)=> setContent(e.target.value)} readOnly={edit !== null} />
        <button onClick={edit ? SaveEdit : AddBlog}>{edit ? "Save data" : "AddTodo"}</button>
        <button onClick={logout} className='absolute  right-8 bg-red-900 text-white border-1 px-4 '>Logout</button>

        
       </div>


      {data.map((result, index)=>(
        <div key={result.id} className='mt-4 bg-red-400 w-96 p-4 rounded text-xl'>
          <h1>{result.title}</h1>
          
          <h1>{result.content}</h1>
          <h1>{result.summary}</h1>
          <button onClick={()=> Deletehandler(result.id)}>Delete</button>

          <button onClick={()=> Edithandler(result.id)} className='text-blue-600 mx-24'>Edit</button>

        </div>
      ))}



    </div>
  )
}

export default Blog