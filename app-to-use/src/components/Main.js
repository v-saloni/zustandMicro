import * as React from "react";
import App from "./App";
import "./styles.css";
//import Counter from './Counter';

const MainApp = () => {
  const [name, setName] = React.useState(null);
  //const [count, setCount] = React.useState(0);
  //const [obj, setObj] = React.useState({count:0});
  return (
    <>
      <h3 style={{ textAlign: "center" }}>
        {name ? <p>Your name is: {name}</p> : null}
      </h3>
      {/* <h3 style={{textAlign: 'center'}}>
        {name?<p>Initial Counter value: {initialCount}</p>: null}
    </h3>
    <Counter initialCount={initialCount}/> */}

      <App onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default MainApp;
