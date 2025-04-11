import React from 'react'
import Login from './components/LOgin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog'
import Register from './components/Register'
import Protected from './components/Protected'

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Blog' element={<Protected><Blog/></Protected>}/>
        <Route path='/register' element={<Register />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App



// import React from 'react'
// import { createContext } from 'react'
// import Blog from './components/Blog'


//  const Providecontext =  createContext()

// const App = () => {
//   return (
//     <div>
//       <h1>hello</h1>

//       <Providecontext value={{name:"hello Aditya", age: 25 }}>
//        <Blog />
//       </Providecontext>



//     </div>
//   )
// }

// export default App
// export {Providecontext}

    


// import React from 'react'
// import { useMemo } from 'react'
// import { useState } from 'react'

// const App = () => {


//   const [first, setFirst] = useState(0)

//   const [second, setSecond] = useState(0)

//   const multiply = useMemo(() => 
//     function extraAdd(){
//       console.log("Extra Add")
//       return first + 5
//     }
//     , [first])


//   return (

//     <div>

//      {multiply}

//      {}

//      <p>Increament value: {first}</p>

//      <button onClick={()=> setFirst(first + 1)} >Increment</button>

//      <p  >Decrement value: {second}</p>

//      <button onClick={()=> setSecond(second - 1)}>Decrement</button>

//     </div>
//   )
// }

// export default App