import React from "react";

function Vote(props){
    return(
        <>
       <h3>Functional component</h3>
       <p>{props.name} are {props.age>18?" eligible ":" not eligible "} to vote</p>
        </>
    )
}

export default Vote;