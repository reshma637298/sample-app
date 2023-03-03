import React, {useContext} from "react";
import  ComponentE  from "./ComponentE";
import { UserContext, AgeContext } from "./ParentContext";

export default function ComponentD (){

    const user = useContext(UserContext);
    const age = useContext(AgeContext)
    return(
        <>
        <h2>ComponentD</h2>
        <p>User : {user} age: {age}</p>
        {/* <ComponentE/> */}
        </>
    )
}