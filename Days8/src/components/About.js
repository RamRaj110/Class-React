import React from "react";
import UserClass from "./UserClass";
import UserFnclass from "./UserFnclass";


// const About = ()=>{
//     return (
//         <div>
//             <h1>Hello </h1>
//             <h1>I'm about section.</h1>
//             <UserFnclass name={"Pawan"} />
//             <UserClass name="Pawan" />
//         </div>
//     )
// }


class About extends React.Component{
   constructor(){
    super()
    console.log("I am about constructor parent.");
    
   }
   componentDidMount(){
    console.log("i am parent Component did mount.");
    
   }

   render(){
    console.log("I am parent render");
    


    return(
        <div>
            <h1>About section</h1>
            <UserClass/>
        </div>
    )
   }
}

export default About;