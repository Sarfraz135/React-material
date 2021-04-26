import React from 'react'
import {connect} from 'react-redux'
import {get_users} from '../../store/action/index.js'
import '../Chat/style2.css';
import firebase from '../../config/firebase'


class Chat extends React.Component{
    constructor(){
        super()
        this.state={
            chat_user:{},
            chats:[],
            message:""
        }
    }



    chats=(user)=>{
        this.setState({
            chat_user:user,
            message:""
        })
        let current_user = this.props.current_user
        let merge_uid=   this.uid_merge(current_user.uid, user.uid);
        this.get_messages(merge_uid)
      console.log(merge_uid)
    }

    uid_merge(uid2,uid1){
        if(uid2<uid1){
            return uid2+uid1
        }else{
            return uid1+uid2
        }

    }
    get_messages(uid){
        firebase.database().ref('/').child(`chat/${uid}`).on("child_added",(messages)=>{
            this.state.chats.push(messages.val())
            this.setState({
                chats:this.state.chats
            })

        })

    }

    send_message=()=>{
        // console.log('message==>',this.state.message)
        let user = this.props.current_user
        let merge_uid=   this.uid_merge(user.uid, this.state.chat_user.uid);
        let chat_user = this.state.chat_user

        firebase.database().ref('/').child(`chat/${merge_uid}`).push({
            message:this.state.message,
            name:user.name,
            uid:user.uid
        })
       
       
        // this.state.chats.push({
        //     message:this.state.message
        // })
        this.setState({
            
            message:""
        })

    }

componentDidMount(){
   this.props.get_users()

}


    render(){
        let user = this.props.current_user
        // console.log('fbprops',this.props)

        console.log('firebaseUsers',this.props.users)
        return(
            <div>

               

               <h4>
                    WelCome!{user.name}
                </h4>
                <img src={user.profile} />
                <div style={{ display:"flex"}}>
                    <div style={{backgroundColor:'red',width:'300px',display:"flex"}}>
                        <h4>
                            Chat Users:
                        </h4>
                        <ul>
                            {this.props.users.map((v,i) => {
                                return v.uid !== user.uid &&<li key={i}>
                                    <img src={v.profile} alt="" width="20px" />
                                {v.name} 
                                <button onClick={()=>this.chats(v)}>Chat</button></li>

                            })}
                        </ul>


                    </div>
                   
                <div style={{backgroundColor:'green',width:'300px',display:"flex"}}>
                   
                    {Object.keys(this.state.chat_user).length ?
                    <div>
                        <h3>
                        <img src={this.state.chat_user.profile} alt="" width="20px" />
                        {this.state.chat_user.name}

                        </h3>


                        <ul>
                            {this.state.chats.map((v,i)=>{
                                return <li key={i}>{v.message}</li>


                            })}
                        </ul>

                    <input value={this.state.message} onChange={(e)=>this.setState({message:e.target.value})} type="text" placeholder="Enter Your Messages" />
                    <button onClick={()=>this. send_message()}>Send</button>
                    </div>
                    :
                    <h1>No User</h1>
                  }

                </div>
                </div >




             
               
            </div>
        )
    }
}


const mapStateToProps=(state)=>({
    current_user:state.current_user,
    users:state.users
})


const mapDispatchToProps=(dispatch)=>({
get_users: ()=>dispatch(get_users())
})


export default connect(mapStateToProps,mapDispatchToProps) (Chat);
