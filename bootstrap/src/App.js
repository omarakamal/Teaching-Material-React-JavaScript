import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function App() {
  const [myStudent, setMyStudent] = useState({id:"",name:"",email:""})
 useEffect(()=>{
   axios.get("/api/student")
    .then(response=>{
      console.log(response.data)
      setMyStudent(response.data[1])
   })
   return()=>{}
 },[])
function handleClick(){
  axios({
    method:'post',
    url:'api/student/add',
    data:{
      id:23,
      name:"meshal",
      email:"meshal@jouf.com"
    }
  });
}
  return (
    <div>
            <br></br>
      <br></br>
      <h2>my Student details are:  {JSON.stringify(myStudent)}</h2>
      <button onClick={handleClick}>Post to Spring</button>
    </div>
  )
}