// import logo from './logo.svg';
import React from 'react'
import {connect} from 'react-redux'
import {facebook_login} from  '../../store/action'
class Home extends React.Component{
   
  render(){
    console.log('props===>',this.props)
    return(
      <div>
        <h1>
            Hello Bhai
        </h1>
     
        <button onClick={()=>this.props.facebook_login(this.props.history)} >FACEBOOK LOGIN</button>
      </div>
    )
  } 
}



const mapStateToProps=(state)=>({
    users :state.users
})


const mapDispatchToProps=(dispatch)=>({
 
  facebook_login:(history)=> dispatch(facebook_login(history))
})


export default connect(mapStateToProps,mapDispatchToProps) (Home);

