import React from "react";
import  ComponentC  from "./ComponentC";

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

export default function ParentComponent() {
  return (
    <UserContext.Provider value={"Tester"}>
      <AgeContext.Provider value={"25"}>
        <ComponentC />
      </AgeContext.Provider>
    </UserContext.Provider>
  );
}
