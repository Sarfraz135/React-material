 
//  frist method 
// function Home(props){

// second method 
function Home({name,email}){


    return(
        <div>
            <h1>Home</h1>
{/* first method   */}

    {/* <h2>{props.name}</h2>
    <h3>{props.email}</h3> */}

    {/* second method 
     */}
    <h2>{name}</h2>
    <h3>{email}</h3>


        </div>
    )
}

export default Home;