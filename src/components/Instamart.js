import { useState } from "react"

const Section=({title, description})=>{
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="border-2 border-black p-2 m-2">
            <h1 className="text-xl font-bold">{title}</h1>
            {isVisible?<button onClick={()=>{
                setIsVisible(false)
            }} className="border-2 border-blue">Hide</button>:<button onClick={()=>{
                setIsVisible(true)
            }} className="border-2 border-blue">Show</button>}
            {/* {isVisible?<p>{description}</p>:<></>} */}
            {isVisible && <p>{description}</p>}
        </div>
    )
}



const Instamart = () =>{
    return(
        <div className="p-2 m-2">
            <h1 className="text-3xl font-bold">Instamart</h1>
            <Section title={"About Instamart"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque fugit placeat quasi cum facere iusto nam dolor quae. Suscipit, architecto"} />
            <Section title={"Contact Instamart"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque fugit placeat quasi cum facere iusto nam dolor quae. Suscipit, architecto"} />

        </div>
    )
}

export default Instamart;