import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../Service/actions';
import reducer from '../../Service/reducers/reducer';

const List = (props) => {
    return (
       <ol>
           {props.todos.map((reducer ,index) =>(
           <li key={index}>{reducer.message} <button onClick ={
               ()=>props.dispatch(deleteTodo(reducer.id))
           }>Delete</button></li>
          ) )}
       </ol>
    );
};
 const mapStateToProps = (state) =>({
     todos:state.reducer.data,
 });

export default connect(mapStateToProps)(List); 
