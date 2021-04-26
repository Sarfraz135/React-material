// import logo from './logo.svg';
import './App.css';
import React from 'react'
// import Home from './components/Home/home.js'
import AppRouter from './config/router'

class App extends React.Component{
  render(){
    return(
      <div>
      <AppRouter />
      </div>
    )
  }
}

export default App;
