import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList = () => {
  const [data,setdata]=useState();

  useEffect(()=>{
    axios.get("").then()
  },[])
  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Bio</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>

      
    </div>
  )
}

export default UserList
