import React from 'react'
import './Home.css'
import { addTodo } from '../../Service/actions'
import { connect } from 'react-redux'
import List from '../Lists/List'


const Home = (props) => {
      
    return(
      <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo list</h1>
          <form onSubmit = {(event) => {
             event.preventDefault();
             let input = event.target.userInput.value;
             props.dispatch(addTodo(input));
             event.target.userInput.value ='';
          }}
          >
          <input type="text" placeholder="Add an item" name="userInput"  />
          <button >  + </button>
          
           </form>
            <List />
        </div>
      </div>
      </>
    )
}

export default connect() (Home);