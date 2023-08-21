import * as React from 'react';
import { useEffect } from 'react';
import './styles.css';
//import mitt from 'mitt'
import Counter from './Counter';


//import useCounterStore from 'MICRO/store';


function App({ onChange }) {
    //console.log("Store content:", useCounterStore())
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
    //const {count, increment, decrement} = useCounterStore();
    return ( 
        <div className='MicroApp'>
            <label>Counter Value: {count}</label>
             <Counter increment={increment} decrement={decrement}/>
            <h1>Micro App</h1>
            <input onChange={onChange} type="text" placeholder="Enter your name"/>
        </div>
     );
}

export default App;