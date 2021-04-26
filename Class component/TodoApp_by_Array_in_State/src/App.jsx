import React,{Component} from 'react';
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: ["Sarfraz","Aslam"],
      value: ''
    }
  } 
  add_todo =() =>{
    // first method
    this.setState({
      todos: [...this.state.todos,this.state.value],
      value: ''
    
    })
    //second method
      // this.state.todos.push(this.state.value)
      // this.setState({
      //   todos: this.state.todos,
      //   value: ''
      // })
      // console.log(this.state.todos)
  }
  delete_todo = (index) =>{
      this.state.todos.splice(index,1)
      this.setState({
        todos: this.state.todos
      })
  }
  edit_todo = (index) =>{
    var updated_val = prompt("Enter value");
    this.state.todos[index] = updated_val
    this.setState({
      todos: this.state.todos
    })

  }
  
  render() {
   let {todos,value} = this.state;
    return(
     
      <div>
        <input value={value} onChange= {(e)=> this.setState({value: e.target.value})} type="text" placeholder="Enter Value"/>
        <button onClick={this.add_todo}>Add Item</button>
        <ul>
          {todos.map((v,i)=>{
              return <li key={i}>
                {v}
                <button onClick={()=>this.delete_todo(i)}>Delete</button>
                <button onClick={()=> this.edit_todo(i)}>Edit</button>

                </li>
            })
          }
        </ul>

      </div>
    )
  }
}

export default App;
