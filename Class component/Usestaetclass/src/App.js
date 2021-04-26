import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'



 
// function App() {
//   // variable
//   // const [name,setName] = useState("Sarfraz Aslam")
//   // const [email,setEmail] = useState("sarfrazaslam2015@gmail.com")


//   // array 
//   // const [arr,setArr] = useState(["Car"])


//   // object 
//   const [obj,setObj] = useState({
//     name:"sarfraz",
//     email:"sarfrazeducation2015@gmail.com"
//   })

//   const handleClick =() => {
//     // setName("Muhammad Sarfraz")
//     // setEmail("sarfrazeducation2019@gmail.com")


//     // array
//     // let old_arr = arr;
//     // old_arr.push("bike","truck")
//     // setArr([old_arr])

// // second method 
//     // setArr([...arr,"bike","car"])


//     // object 

//     // setObj({
//     //   name:"Muhammad Sarfraz",
//     //   email:"sarfrazaslam2015@mail.com"
//     // })

//     // secondmethod

//     setObj({
//       ...obj,
//       school:"Saylani"
//     })
//     console.log(obj)

//   }

//   return (
// <div className="App">
//   <h1>React Hooks</h1>

//   {/* object  */}

//   <h2>{obj.name}</h2>
//   <h2>{obj.email}</h2>


// {/* array  */}

//   {/* <ul>
//     {
//       arr.map((v,i)=>{
//         return <li key={i}>{v}</li>
//       })
//     }
//   </ul> */}

//   {/* variable  */}

//   {/* <h2>{name}</h2>
//   <h2>{email}</h2> */}
//   {/* <button  onClick={()=> setName("Muhammad Sarfraz")}>UPDATE NAME</button>
//   <button  onClick={()=> setEmail("sarfrazeducation2019@gmail.com")}>UPDATE EMAIL</button> */}

// <button onClick={handleClick}>UPDATE</button>
// </div>
//   );
// }

// export default App;




















// lifecycle

function App(){
  const [name,setName] = useState("Fraz")
  const [email,setEmail] = useState("sarfrazeducation2019@gmail.com")


  useEffect(()=>{
    console.log("I will run on every render")
  })

  useEffect(()=>{
    console.log("I will run only on first render")
  },[])


  useEffect(()=>{
    console.log("I will evertime whenever name or email update")
  },[name,email])


useEffect(()=>{
  return()=>{
    console.log("Unmount")
  }
})


  return(
    <div className="App">
      <h1>React Hooks</h1>
  <h2>{name}</h2>
      <button onClick={()=> setName("Sarfraz")}>UPDATE</button>

      {/* <Home name="Muhammad Sarfraz" email="sarfrazaslam2015@gmail.com"/> */}
    </div>
  );
}

export default App;



