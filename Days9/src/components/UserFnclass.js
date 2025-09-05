import { useState } from "react";

const UserFnclass = ({name})=>{
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(2);

    return (
        <div className="fnclass">
            <p>This is functional component</p>
            <h3>Count:{count}</h3>
            <h3>Count2:{count2}</h3>
            <h3>Name:{name}</h3>
        </div>
    )
}
export default UserFnclass;