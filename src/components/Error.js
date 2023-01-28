import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="flex items-center ">
            <h1 className="error-statuscode">{`${err.status} : ${err.statusText} `}</h1>
            <h2 className="error-message">Something went wrong</h2>
        </div>
    )
}
export default Error;