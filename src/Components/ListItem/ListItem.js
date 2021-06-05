import Button from "../../Components/Button/Button"
import {Component} from 'react';
import "./Styles.css";

class ListItem extends Component{
  constructor(props){
    super(props)
      
  }

render(){
  return(
      <div className="list-item">
          <span className="task-title">
              {this.props.task}
              <Button text="delete" isPurble
              handleClick={()=>{}}
              />

          </span>

      </div>
    

  )
}
}
export default ListItem;
