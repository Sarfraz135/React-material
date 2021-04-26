import React ,{Component}from 'react';
import {Header,Logo} from './components/Header';
import Footer from './components/Footer';
import './App.css'



class App extends Component {

  constructor(){
    super()
    this.state = {
      name : "Sarfraz",
      email : "sarfrazaslam2015@gmail.com",
      value : ""
    }
    // first method 
    // this.set_name = this.set_name.blind(this)
   }

  //  first method 
// set_name(){

// }


// second method 
  // set_name=()=>{
  //   this.setState({
  //     name: this.state.value,
  //   })

  // }
  // set_email=()=>{
  //   this.setState({
  //     email: this.state.value,
  //   })
  // }

  // third method 

   set_name=()=>{
    this.setState({
      name: this.state.value,
    })

  }
  // set_email=()=>{
  //   this.setState({
  //     email: this.state.value,
  //   })
  // }

  // get_name=()=>{
  //   console.log(this.state.name)
  // }
  handleChange(e){
    this.setState({
       [e.target.name]:e.target.value
    }
     
    )
      
  }
  
  render() {
     return(
      <div>
      <Header/>  
       <h2>My name is {this.state.name}</h2>
     <h2>Email: {this.state.email}</h2>

{/* third method  */}

<input name="name" onChange={(e)=> this.handleChange(e)} type="text" placeholder="Enter Name"/>
<input name="email" onChange={(e)=>  this.handleChange(e)} type="text" placeholder="Enter Email"/>
   

     {/* second method */}
 {/* <input onChange={(e)=>this.setState({value:e.target.value})} type="text" placeholder="Enter Name"/>
<input onChange={(e)=>this.setState({value:e.target.value})} type="text" placeholder="Enter Email"/>
    <button onClick={()=>this.set_name()}>Set Name</button>
    <button onClick={()=>this.set_email()}>Set Email</button> */}

{/* first method  */}
    {/* <button onClick={this.set_name()}>Set Name</button> */}
    {/* <button onClick={this.get_name()}>Get Name</button>   */}


  <br/>
  <br/>
      <Footer/>
    </div>
     )
  }
}


export default App;

