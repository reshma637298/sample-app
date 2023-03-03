import React, { useState, useEffect, useMemo } from "react";
import { myStyle } from "./CounterClass";

export default function CounterFn() {
  const [counter, setCounter] = useState(0);
  const [resource, setResource] = useState([]);

  // useEffect(() => {
  //   // similar to render api
  //   document.title = `You clicked ${counter} times`;
  // });

  // useEffect(() => {
  //   console.log("useEffect called similar to component did mount");
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect called like component did update");
  // }, [counter]);

  useEffect(()=>{
    console.log('inside useEffect')
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>response.json())
    .then(json=>setResource(json)) 
  }, [])


  
  console.log('resourse', resource)


  const data = useMemo(()=>{
    console.log('inside useMemo')
   return resource?.map((item)=>item?.name) 
  },[resource])

  console.log('data', data)

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //    // set of codes
  //   }
  
  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //   return () => {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };
  // }, [props.friend.id]); 

  // if (isOnline === null) {
  //   return 'Loading...';
  // }
  // return isOnline ? 'Online' : 'Offline';

  return (
    <>
      <h2>Functional component for Counter</h2>

      <h3>Count: {counter}</h3>
      <button style={myStyle} onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button style={myStyle} onClick={() => setCounter(counter - 1)}>
        -
      </button>

<h2>User names</h2>
{
  data && data?.map((item=> <p>{item}</p>))
}
    
    </>
  );
}
