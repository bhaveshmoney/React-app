import React, { useState } from 'react'
import './Home.css'

const Home = () => {
      
  const [inputList,setInputList] = useState("")
    const itemEvents = (event) =>{
       setInputList(event.target.value);
    };
    const listofitem =() =>{};
    return(
      <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo list</h1>
          <input type="text" placeholder="Add an item" onChange={itemEvents}/>
          <button onClick={listofitem}>  + </button>

          <ol>
            <li>{inputList}</li>
          </ol>
        </div>
      </div>
      </>
    )
}

export default Home