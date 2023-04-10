import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Box>
           <RouteLink to="userform"><Button>User Form</Button></RouteLink> 
            <Button>Post Form</Button>
            <Button>User List</Button>
            <Button>Post List</Button>
            <Button>User Analytics</Button>
            <Button>Post Analytics</Button>
        </Box>
    </div>
  )
}

export default Home
