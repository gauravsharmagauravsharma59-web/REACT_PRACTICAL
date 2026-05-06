import React from "react";

const Child = (props) => {
    return (
        <div>
            <div>Child component</div>
            <div>Name: {props.name}</div>
            <div>Age: {props.age}</div>
        </div>
    );
}

export default Child;