import React from 'react';
import {BrowserRouter as Router,Route, } from 'react-router-dom';
import Home from '../components/Home/home'
import Chat from '../components/Chat'



class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home}/>
                <Route   exact path='/Chat' component={Chat}/>
            </Router>
        )
    }
}


export default AppRouter;
