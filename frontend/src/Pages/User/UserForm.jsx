import React, { useState } from 'react'
import {Box, Button, FormControl,FormLabel,Heading,Input} from "@chakra-ui/react"
import axios from 'axios'

const UserForm = () => {
const [formData, setformData]=useState({
    name:"",
    email:"",
    bio:""
})

const handleSubmit=(e)=>{
e.preventDefault();
axios.post("",{
    name:formData.name,
    email:formData.email,
    bio:formData.bio,
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
            <FormLabel>Name</FormLabel>
             <Input type='text' name='name' value={formData.name} onChange={handleChange}/>
         </FormControl>
         <FormControl>
            <FormLabel>Email</FormLabel>
             <Input type='email' name='email' value={formData.email} onChange={handleChange}/>
         </FormControl>
         <FormControl>
            <FormLabel>Bio</FormLabel>
             <Input type='text' name='bio' value={formData.bio} onChange={handleChange}/>
         </FormControl>
         <Button onClick={handleSubmit}>Create</Button>

        </form>
        </Box>

      
    </div>
  )
}

export default UserForm
