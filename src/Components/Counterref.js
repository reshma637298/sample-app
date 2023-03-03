import React, { useState, useEffect, useRef } from "react";

export default function Counterref() {
  const [name, setName] = useState("");
 // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);

//   useEffect(() => {
//     setRenderCount(renderCount + 1);              Causes maximum depth exceed because of rerendering 
//   }, [renderCount]);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <p>My name is {name}</p>
      <h4>Rendered times: {renderCount.current}</h4>
    </>
  );
}
