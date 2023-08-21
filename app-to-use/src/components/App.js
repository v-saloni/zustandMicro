import React from "react";
import "./styles.css";
//import mitt from 'mitt'
import Counter from "./Counter";
import useCounterStore from "host/useStore";

const App = ({ onChange }) => {
  // const { count: count1, increment: inc, decrement: dec } = useCounterStore();
  console.log(">>>a", useCounterStore);
  // const ab = useCounterStore();
  const count = 0;
  const increment = () => {};
  const decrement = () => {};
  return (
    <div className="MicroApp">
      <label>Counter Value: {count}</label>
      <Counter increment={increment} decrement={decrement} />
      <h1>Micro App</h1>
      <input onChange={onChange} type="text" placeholder="Enter your name" />
    </div>
  );
};

export default App;
