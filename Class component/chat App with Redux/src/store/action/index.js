import firebasee from '../../config/firebase.js' ;
import firebase from 'firebase'
// import {useHistory} from 'react-router-dom'
 
 
 
 


const facebook_login=(history)=>{
    // console.log('running====>')
    return(dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
           
            var token = result.credential.accessToken;
          
            var user = result.user;
            let create_user={
                name:user.displayName,
                email:user.email,
                uid:user.uid,
                profile:user.photoURL
            }
            console.log('userid==>',user,create_user)

            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)

            .then(()=>{
                alert('login successfully!')
                dispatch({type:"SETUSER",payload:create_user})
                history.push('/Chat')
            })


          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
          });
    }

}



const get_users =()=>{

    return (dispatch)=>{
        let users=[];
        firebase.database().ref('/').child('users').on("child_added",(data)=>{
           console.log("firebase data=====>",data.val())
           users.push(data.val())
        })
        dispatch({type:"SETFIREBASEUSER",payload:users})
    }

}



export{
    facebook_login,
    get_users
}



// const data_get =()=>{
//    // console.log('running')
//    return(dispatch)=>{
//        dispatch({type:'GETDATA',users:{name:'arsalan Akhter' , email:'arsalakhtar@gmail.com'}})
//        // console.log('running')
//    }
// }

// export {
//     data_get,
//     facebook_login
// }