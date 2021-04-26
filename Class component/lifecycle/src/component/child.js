import React from 'react'




class child extends React.Component{
   // get drive 2 
    // static getDerivedStateFromProps(props,state){
    //     console.log("getDerivedStateFromProps",props)
    //     return null
    //   }
    componentWillUnmount(){
        console.log("component khal'las...")
    }
    render() {
        return(
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}


export default child;