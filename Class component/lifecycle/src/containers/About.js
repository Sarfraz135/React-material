import React from 'react';
import {Link} from "react-router-dom";


class About extends React.Component{
    // second method 
    gotohome =() =>{
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
                <h1>About Page</h1>
                {/* first method using link  */}
                {/* <Link to="/">go to home</Link> */}
                {/* second method using javascript */}
                <button onClick={this.gotohome}>Go to Home</button>
            </div>
            
        )
    }
}

export default About;