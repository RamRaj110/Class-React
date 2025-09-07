
Episode 10 tailwind css.

Episode 11 - Data is the new oil
Theory:
Topics Covered:
⦁	Seperation of a React Application into UI-Layer and Data-Layer
⦁	Controlled and Uncontrolled Components
⦁	Prop Driling
⦁	Context API in React



props - props is the value pass one element to another element.
states - states are local variable.

Props Drilling- pass the props parent to child - child to child and grand child. 

Lifting the state up

usecontext- usecontext create once and use anywhere--
import { createContext } from 'react'

const userData= createContext({
    user:{
        name: "pawan",
        email: "pawan@123"
    }
});

export default userData;
-------
import userData from "./utils/useContext";
import { useContext } from "react";
header
  const {user}= useContext(userData);
h2- user.name h2

