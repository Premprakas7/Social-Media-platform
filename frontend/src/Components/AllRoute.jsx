import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import UserForm from '../Pages/User/UserForm'
import PostForm from '../Pages/Post/PostForm'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/userform' element={<UserForm/>}/>
            <Route path='/postform' element={<PostForm/>}/>



        </Routes>
      
    </div>
  )
}

export default AllRoute
