import React, { useContext, useState } from 'react'
import { userContext } from './App'
import { setData } from './store'
import { FaDeleteLeft } from "react-icons/fa6";
const Notes = () => {
    const {notes,setContent,setTitle,setSelected}=useContext(userContext)
   const [check ,setCheck]=useState(false)
      function handleClick(item){
        setContent(item.content)
        setTitle(item.title)
        setSelected(item)
      
      
      }

      function handleDelete(id){
        setCheck(true)
        const updated=notes.filter(item=>item.id!==id)
        setData(updated)
      }
      
      
  return (
    <div className="main-notes">
    {
      notes.map((item)=>{
        return <div key={item.id} className="notes" style={{backgroundColor:item.color}} onClick={()=>handleClick(item)}>
        <div>
        <button onClick={()=>handleDelete(item.id)}><FaDeleteLeft size={20} /></button>
        </div>
          

        <h2>{item.title}</h2>
        <p>{item.content}</p>

      </div>
      })
    }
      
  </div>
  )
}

export default Notes