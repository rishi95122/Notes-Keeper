
import './App.css';
import {createContext, useState} from "react"
import { getData, setData } from './store';

import Notes from './Notes';
import Form from './Form';
import Formapi from './Formapi';
import Forms from './Forms';

export const userContext=createContext()
function App() {

const notes =getData() || []
const [selected,setSelected]=useState(null)
const [title,setTitle]=useState("");
 const [content,setContent]=useState("")



  return (
    <userContext.Provider value={{notes, title,content,setContent,setTitle,setSelected,selected}} >
      <h1>Notes Keeper</h1>
       <div className="App">
       <Form />
       <Notes />
     </div>
     <Formapi />
     <Forms />
    </userContext.Provider>
   
  );
}

export default App;
