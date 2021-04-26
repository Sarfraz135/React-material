import React,{Component} from 'react';
import  firebase from './config/firebase.js';
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [{title:"Sarfraz",eidt: false},{title:"Aslam",edit:false}],
      value: ''
    }
  } 
  add_todo =() =>{
    
    // first method
    let obj = {title: this.state.value}
    firebase.database().ref('/').child("todos")
    .push(obj)
    this.setState({
      todos: [...this.state.todos,obj],
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
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })

  }
  handleChange = (e,index)=>{
     this.state.todos[index].title = e.target.value;
     this.setState({
       todos:this.state.todos
     })
  }
  update= (index) =>{
      this.state.todos[index].edit = false;
      this.setState({
        todos:this.state.todos
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
                {v.edit ? <input value={v.title} type="text" onChange={(e)=> this.handleChange(e,i)}/>:v.title}
                {v.edit ?
                <button onClick={()=>this.update(i)}>Update</button>
                :
                 <button onClick={()=> this.edit_todo(i,v.title)}>Edit</button>
              }
               
                
                <button onClick={()=>this.delete_todo(i)}>Delete</button>
                </li>
            })
          }
        </ul>

      </div>
    )
  }
}

export default App;
