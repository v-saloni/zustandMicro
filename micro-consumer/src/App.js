import React, { lazy, Suspense } from "react";
import "./components/styles.css";
//import mitt from 'mitt'
//import useCounterStore from 'MICRO/store';
import useCounterStore from "MICRO/store";
import FirstApp from "FIRST_APP/app";

//const FirstApp = lazy(() => import("FIRST_APP/app"));

const App = () => {
  const [name, setName] = React.useState(null);
  const setCountTo = 5;
  const { count } = useCounterStore();
  //const emitter = mitt()
  //   window.emitter = mitt()
  // // listen to an event
  //   window.emitter.on('increment', increment)
  //   window.emitter.on('decrement', decrement)
  return (
    <div className="App">
      <h1>This is second app</h1>
      <h2>Micro host app is integrated here</h2>
      {name ? <p>Your name is: {name}</p> : null}
      <p>Count from host: {count}</p>
      <div>
        {/* <button onClick={()=>emitter.emit('foo')}>See Event on Child</button> */}
        {/* <button onClick={()=>}>See Event</button> */}
        {/* <h3 style={{textAlign: 'center'}}>
        {name?<p>Initial Counter value: {initialCount}</p>: null}
    </h3> initialCount={setCountTo}*/}
        {/* <Suspense fallback={<span>Loading...</span>}> */}
        <FirstApp
          onChange={(e) => setName(e.target.value)}
          count={setCountTo}
        />
        {/* </Suspense> */}
      </div>
    </div>
  );
};

export default App;
