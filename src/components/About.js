import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
// import Profile from "./Profile";

// class AboutClass extends React.Component{
//     constructor(props){
//         super(props);
//         console.log('Parentclass constructor')
//     };

//     componentDidMount(){
//         console.log('Parentclass componentDidMount')
//     }

//     render(){
//         console.log('Parentclass render')
//         return(
//             <>
//                 <h1>About</h1>
//                 <div>This is the about page content </div>
//                 <Outlet/>
//                 <ProfileClass name="Sanskriti"/>
//             </>
//         )
//     }
// }

const About = () =>{
    return(
        <>
            <h1 className="font-bold text-5xl p-5 px-5">About</h1>
            <div >This is the about page content </div>
            <Outlet/>
            {/* <ProfileClass name="Sanskriti"/> */}
        </>

    )
}

export default About;
// export default AboutClass