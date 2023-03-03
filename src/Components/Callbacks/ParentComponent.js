import { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

export default function ParentComponent() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(25000);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary]);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  },[age]);

//   const incrementSalary = () => {
//     setSalary(salary + 1000);
//   };

//   const incrementAge = () => {
//     setAge(age + 1);
//   };

  return (
    <>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  );
}
