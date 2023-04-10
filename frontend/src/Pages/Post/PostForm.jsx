import React, { useState } from 'react'
import {Box, Button, FormControl,FormLabel,Heading,Input} from "@chakra-ui/react"
import axios from 'axios'

const PostForm = () => {
const [formData, setformData]=useState({
    content:"",
    likes:""
})

const handleSubmit=(e)=>{
e.preventDefault();
axios.post("",{
    content:formData.content,
    likes:formData.likes,
}).then((res)=>{console.log(res.data)})

}


const handleChange=(e)=>{
    const {name,value}=e.target;
    setformData({...formData,[name]:value});
}

  return (
    <div>
        <Box w="30rem" ml="30%">
            <Heading>User Form</Heading>
        <form onSubmit={handleSubmit}>
        <FormControl>
            <FormLabel>Content</FormLabel>
             <Input type='text' name='content' value={formData.content} onChange={handleChange}/>
         </FormControl>
         <FormControl>
            <FormLabel>Likes</FormLabel>
             <Input type='number' name='likes' value={formData.likes} onChange={handleChange}/>
         </FormControl>
         <Button onClick={handleSubmit}>Create</Button>
        </form>
        </Box>
    </div>
  )
}

export default PostForm
