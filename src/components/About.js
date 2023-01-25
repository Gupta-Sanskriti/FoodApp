import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () =>{
    return(
        <>
            <h1>About</h1>
            <div>This is the about page content </div>
            <Outlet/>
            <ProfileClass name="Sanskriti"/>
        </>

    )
}

export default About;