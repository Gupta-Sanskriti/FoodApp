// class based component
import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        //creating state
        this.state = {
            count:0,
            count2:0,
        };
        console.log('Child constructor')
        
    }
    componentDidMount(){
        // runs once after initial render
        console.log('Child componentDidMount')
        // this.timer = setInterval(()=>{
        //     console.log("timer clicked")
        // },1000)
    }
    componentDidUpdate(){
        // runs everytime after state changes
        console.log('Child componentDidUpdate')
    }
    componentWillUnmount(){
        // used for cleanup
        // clearInterval(this.timer)
        console.log('Child componentWillUnmount')
    }
    render(){
        console.log('Child render')
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