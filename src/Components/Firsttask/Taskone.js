import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap';
import './taskone.css'
import axios from 'axios'

export default function Taskone() {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            setUsers(res.data);
            console.log(users);
        })
    },[])
  return (
    <div >
    <Table bordered hover className='table'>
    <thead>
      <tr>
        <th rowSpan={3}>Id</th>
        <th rowSpan={3}>Name</th>
        <th rowSpan={3}>Username</th>
        <th rowSpan={3}>Email</th>
        <th colSpan={6}>Address</th>
        <th rowSpan={3}>Phone</th>
        <th rowSpan={3}>Website</th>
        <th colSpan={3}>Company</th>
       
      </tr>
       <tr> 
          <th rowSpan={2}>Street</th>
          <th rowSpan={2}>Suite</th>
          <th rowSpan={2}>City</th>
          <th rowSpan={2}>Zipcode</th>
          <th colSpan={2}>Geo</th>
          <th rowSpan={2}>Name</th>
          <th rowSpan={2}>CatchPhrase</th>
          <th rowSpan={2}>Bs</th>
      </tr>
      <tr>
          <th>lat</th>
          <th>lng</th>
      </tr>
    </thead>
    <tbody className='tablebody'>
{users.map((obj)=>(

      <tr>
        <td>{obj.id}</td>
        <td>{obj.name}</td>
        <td>{obj.username}</td>
        <td>{obj.email}</td>
        <td>{obj.address.street}</td>
        <td>{obj.address.suite}</td>
        <td>{obj.address.city}</td>
        <td>{obj.address.zipcode}</td>
        <td>{obj.address.geo.lat}</td>
        <td>{obj.address.geo.lng}</td>
        <td>{obj.phone}</td>
        <td>{obj.website}</td>
        <td>{obj.company.name}</td>
        <td>{obj.company.catchPhrase}</td>
        <td>{obj.company.bs}</td>
       
      </tr>
      ))
   }
    </tbody>
  </Table>
  </div>
  )
}
