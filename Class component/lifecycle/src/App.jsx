import React,{Component} from 'react';
import './App.css';
import Child from './component/child'


import AppRouter from './config/router'

class App extends Component{
  constructor(){
    super()
    this.state = {
      count:0
      // ,
      // data:[]
    }
    console.log("Constructor")
  }



  // static getDerivedStateFromProps(props,state){
  //   console.log("getDerivedStateFromProps",state)
  //   return null
  // }


getSnapshotBeforeUpdate(preProps,preState){
  console.log("getSnapshotBeforeUpdate",preState)
  return 10
}
//  preProps state ki old value update hne se phle wali value lakr save krta hai 
// {getSnapshotBeforeUpdate pr jo return krwate han wo componentDidUpdate k 
//  parameter 'snapshot' mai ajata hai} 



componentDidUpdate(preProps,preState,snapshot){
 console.log("componentDidUpdate",snapshot)
}


// shouldComponentUpdate(){
//   if(this.state.count <5){
//     return true;
//   }else{
//     return false
//   }
  
// }








        /* for getdrive 01  */
 
  // static getDerivedStateFromProps(){
  //   console.log("getDerivedStateFromProps")
  //   return{
  //     count: 0
  //   }
  // }









  // componentDidMount(){
  //   console.log("componentDidMount")
  //   // json placeholder from web 
  //   // link = https:"//jsonplaceholder.typicode.com/"
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(data => {
  //   // console.log("data===>",data))
  //   this.setState({
  //     data: data
  //   })
  // })
  // .catch(err => console.log(err))
  // }







  render(){
        {/* for getdrive 01  */}

    // console.log("render");
    // console.log("data==>",this.state.data)
    // return(
      // <div>
        {/* for getdrive  */}
      {/* <h1>React Lifecycle</h1>
      { this.state.data.map((v,i) =>{
        return <h4>{v.title}</h4>
      })} */}
      // </div>
// )






        // console.log("count==>",this.state.count);

      // return(

      //   <div style={{textAlign: 'center'}}>
      //     <h1>{this.state.count}</h1>

      
      //     <button onClick={()=> this.setState({count: this.state.count+1})}>Increament</button>
      //     <button onClick={()=> this.setState({count: this.state.count - 1})}>Dicreament</button>


      //   </div>
      // )

      







      // get derive 2 
    //   return(
      
           
    //  <div style={{textAlign: 'center'}}>
    //   <Child count={this.state.count}/>

      
    // <button onClick={()=> this.setState({count: this.state.count+1})}>Increament</button>
    // <button onClick={()=> this.setState({count: this.state.count - 1})}>Dicreament</button>

    //     </div>
    //   )














//  shouldComponentUpdate
    // return(
      
           
    //   <div style={{textAlign: 'center'}}>
    //    <Child count={this.state.count}/>
 
       
    //  <button onClick={()=> this.setState({count: this.state.count+1})}>Increament</button>
    //  <button onClick={()=> this.setState({count: this.state.count - 1})}>Dicreament</button>
 
    //      </div>
    //    )
    


















  

    return(
      // componentWillUnmount
           
      <div style={{textAlign: 'center'}}>
        {this.state.count <5 &&        <Child count={this.state.count}/>}
 
       
     <button onClick={()=> this.setState({count: this.state.count+1})}>Increament</button>
     <button onClick={()=> this.setState({count: this.state.count - 1})}>Dicreament</button>
 
         </div>
       )








  }
}
export default App;
