import { bindActionCreators } from "redux";


const Initial_state = {
   users:[],
    current_user: {

    }
}







export default (state = Initial_state, action) => {

    switch (action.type) {
        case "SETUSER":

            return ({
                ...state,
                current_user: action.payload

            })
        case "SETFIREBASEUSER":

            return ({
                ...state,
                users:action.payload
               

            })

       
            
        }
        return state;
}























//  export default (state= Initial_state ,action )=>{
//      console.log('action==>' , action)
//      switch (action.type) {
//         case "GETDATA":
//             // console.log('state======>', state)
//             return ({
//                 ...state,
//                 users: [...state.users,action.users]
//                 // ,name:'touseef'
//             })

//         default:
//             return state;

//     }

// return state;
//  }