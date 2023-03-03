// import React, { useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// export default function CounterReducer() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <h1>useReducer Example</h1>
//       <div>Count : {count}</div>
//       <button onClick={() => dispatch("increment")}>Increment</button>
//       <button onClick={() => dispatch("decrement")}>Decrement</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </>
//   );
// }

import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        // name: state.name,
        ...state,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
}
const initialState = { name: "Taylor", age: 42 };
export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }
  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>        Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
}
