import React from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Home from '../containers/Home';
import About from '../containers/About'

class AppRouter extends React.Component{
    render(){
        return(
<Router>
    <Route exact path='/' component={Home}/>
    <Route path='/About' component={About}/>
    
</Router>
        )
    }
}

export default AppRouter;