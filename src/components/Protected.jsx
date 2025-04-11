import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {


    const isauthenticated =  localStorage.getItem("isloggedIn") === "true"

    if(!isauthenticated){
        return <Navigate to="/" replace />;

    }

  return (
    children
  )
}

export default Protected     