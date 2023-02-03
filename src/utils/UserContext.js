import { createContext } from "react";

const UserContext = createContext({
    user: {
        dname:"dummy name",
        email: "dummy@email.com"
    }
    
})

export default UserContext;