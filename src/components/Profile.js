import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Profile = () =>{

    useEffect(()=>{
        let timer = setInterval(()=>{
            console.log("profile visited")
        }, 1000)

        return()=>{
            
        }
    })
    console.log("profile")
    return (
        <>
        <h1> Hi this is functional component profile profile</h1>
        {/* <Outlet/> */}
        </>
        
    )
}

export default Profile; 