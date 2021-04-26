import React, {Component} from 'react';
import Header  from './components/Header';
import Footer  from './components/Footer';
import BasicTextFields from './components/TextField'
import './App.css'






class App extends Component{
  render(){
    let todos = [{text:"Sarfraz"},{text:"Aslam"}];
    return(
        <div>
          <Header/>    
          <h1 style={{color:'red',fontSize: '18px'}}>Main Component </h1>
          <button type="button" className="btn btn-primary">Primary</button>
          <BasicTextFields />
          <ul>
            {todos.map((item,index)=>{
              // console.log(item)
            return <li key={index}>{item.text}</li>
            })}
          </ul>
          <Footer/>
        </div>
    )
  }
}




export default App;