import  firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database';
var firebaseConfig = {
    apiKey: "AIzaSyBAaYAozWrlRE4uEBILqCc99h8Ugdiy9ds",
    authDomain: "chat-app-with-facebook-login.firebaseapp.com",
    databaseURL: "https://chat-app-with-facebook-login.firebaseio.com",
    projectId: "chat-app-with-facebook-login",
    storageBucket: "chat-app-with-facebook-login.appspot.com",
    messagingSenderId: "849637834844",
    appId: "1:849637834844:web:2d669085a69daf5130e699"
  };
  // Initialize Firebase
var Firebase = firebase.initializeApp(firebaseConfig);
export default  Firebase;
