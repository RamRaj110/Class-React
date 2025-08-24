
import React from "react";
import ReactDOM from "react-dom/client"

// React Element
const heading = (
    <h1 className="helo" >
        i am react element
    </h1>
)

// React Component
const HeadingComponent = ()=>{
<div className="helo">
    <h1>I am React Component</h1>
</div>
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// root.render(<HeadingComponent/>);
