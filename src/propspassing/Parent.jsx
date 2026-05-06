import React from "react";
import Child from "./Child";

function Parent(){
    const name = "Gaurav";
    const age = 19;

 return (
    <div>
        <div>Parent component</div>

        <Child name={name} age={age} />
    </div>
 );
}

export default Parent;