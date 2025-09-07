import { createContext } from 'react'

const userData= createContext({
    user:{
        name: "pawan",
        email: "pawan@123"
    }
});

export default userData;