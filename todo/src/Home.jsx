import React, { useState } from 'react'
import './Home.css'

const Home = () => {
      
  const [inputList,setInputList] = useState("")
    const itemEvents = (event) =>{
       setInputList(event.target.value);
    };
    const [Items,setItems]=useState([]);
    const listofitem =() =>{
      setItems( (olditems) =>{
        return [...olditems,inputList];
      })
      setInputList('');
    };
    return(
      <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo list</h1>
          <input type="text" placeholder="Add an item" value={inputList} onChange={itemEvents}/>
          <button onClick={listofitem}>  + </button>

          <ol>
            
           { Items.map( (itemval) =>{
             
              return  (
                <>
                <div className="delete">
             <i className="fas fa-trash" aria-hidden="true"/>
             <li>{itemval}</li>
             
             
              
              </div>
              </>
              )
            })}
          </ol>
        </div>
      </div>
      </>
    )
}

export default Home