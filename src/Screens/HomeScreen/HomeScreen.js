import Button from "../../Components/Button/Button"
import {Component} from 'react';
import "./Styles.css";
import ListItem from "../../Components/ListItem/ListItem"
import {data} from"../../Data.js"
class HomeScreen extends Component{
  constructor(props){
    super(props)
      
  }

render(){
  return(
        
    <div className="inner-container">
      <h1 className="page-title"> To Do List App</h1>
      <section className="input-section">
          <input
          className="add-task-input"
          type="text"
          placeholder="Enter New Task ..."
          >

          </input>
          <Button
          text="Add"    
          handleClick={()=>{}}
          >
              
          </Button>

      </section>
      <section className='items-section'>
          {data.map(item=><ListItem
           task={item.text}
           key={item.id}
           /> )}         
         </section>


    </div>


  )
}
}
export default HomeScreen;
