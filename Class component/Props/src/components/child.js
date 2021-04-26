import React from 'react'

class Child extends React.Component{
    render() {
        return(
            <div>
                {/* data get that is sent by parent   */}
                {/* <h1>this.props.name</h1>
                <h4>Rs: {this.props.price}</h4> */}

                {/* data send by the child  */}

            <h1>{this.props.name}</h1>
            <h4>Rs: {this.props.price}</h4>
            <button onClick={()=>this.props.get_data("Sarfraz Aslam")} >Send Data</button>
           </div>
        )
    }
}

export default Child;