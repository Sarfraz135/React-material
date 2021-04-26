import * as firebase from 'firebase/app';
import 'firebase/database';
// import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCBMKkU1tj-ypAJRjgNCZjCMHXwzjE3hF4",
    authDomain: "react-todo-b41f1.firebaseapp.com",
    databaseURL: "https://react-todo-b41f1.firebaseio.com",
    projectId: "react-todo-b41f1",
    storageBucket: "react-todo-b41f1.appspot.com",
    messagingSenderId: "1036236989459",
    appId: "1:1036236989459:web:fa9cf34dafb08247840be6",
    measurementId: "G-P2RZ69LB2L"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);