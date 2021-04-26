import React, {Component} from 'react';
import Child  from './components/child';
import './App.css';

class App extends Component {
  get_data(data){
  console.log(data)}
  render() {
    return(
      <div>
        <h1>Parent Component</h1>

{/* data goes from parent to child */}
        {/* <Child name="Car" price="1000000"/>
        <Child name="Watch" price="500"/>
        <Child name="House" price="2000000"/>
        <Child name="Bike" price="15000"/> */}


{/* data get that is sent by the child  */}
 <Child get_data={this.get_data} name="car" price="100000"/>
      </div>
    )
  }
}

export default App;
