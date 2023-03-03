import React from "react";
import { UserContext, AgeContext } from "./ParentContext";

export default function ComponentE() {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <AgeContext.Consumer>
            {(age) => {
              return (
                <h2>
                  Name : {user}, age :{age}
                </h2>
              );
            }}
          </AgeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}
