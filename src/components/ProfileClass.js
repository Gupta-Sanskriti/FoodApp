// class based component
import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        //creating state
        this.state = {
            count:0,
            count2:0,
        }
        
    }

    
    render(){
        // console.log(this.props)
        // console.log('sasa',sasa)
        return(
            <>
            <h1>Class based components</h1>
            <p>Hello : {this.props.name}</p>
            <p>state : {this.state.count}</p>
            <p>state : {this.state.count2}</p>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                    count2 : this.state.count2+2
                })
            }}>+</button>
            </>
        )
        
       
    }
}

export default ProfileClass;