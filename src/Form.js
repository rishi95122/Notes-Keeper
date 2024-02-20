import React, { useContext, useState } from 'react'
import { userContext } from './App'
import { setData } from './store';
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const color=["rgb(168, 127, 255)","aquamarine","azure","rgb(255, 127, 185)","rgb(127, 255, 172)","rgb(255, 191, 127)"]

const Form = ( ) => {
    const {notes,setSelected,selected ,title,content,setContent,setTitle}=useContext(userContext)
    
    function handleAdd(e){

        e.preventDefault();
        const note={
          id:notes.length,
          title :title,
          content:content,
          color:color[Math.floor(Math.random() * color.length)]
        }
        
        setData([note,...notes])
        setTitle("")
        setContent("")
        toast.success("Note Added")
        
        }
        function handleUpdate(){

            const note={
              id:selected.id,
              title :title,
              content:content,
            color:color[Math.floor(Math.random() * color.length)]
          
          
            }
          
            const updated= notes.map((item)=> selected.id===item.id?note :item)
            setData(updated)
            setContent("")
            setTitle("")
            setSelected(null)
          }
          
    return (
    
    <div className="form-note">
    <h3>Add A note</h3>
    <form onSubmit={handleAdd}>
      <input placeholder="title" value={title } onChange={(e)=>setTitle(e.target.value)}/>
      <textarea rows={15} value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
      {
        (selected) ? <div className='selected'>
              <button type="button" onClick={handleUpdate}>Update</button>
              <button type="button" onClick={()=>{setSelected(null)
               setContent("")
setTitle("")}}>Cancel</button>
        </div> : <button type="submit">Add Note</button>
      }
      
    </form>
    <ToastContainer />
  </div>
  )
}

export default Form