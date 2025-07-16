import React, { useState } from 'react'

const App = () => {
    const [Count, setCount] = useState(0);

    const increment = () =>{
        setCount(Count+1);
    }

    const decrement = () =>{
        setCount(Count-1);
    }

    const reset = () =>{
        setCount(0);
    }


  return (
    <div>
        <div class="container">
         <div class="timer-container">
           <h3>Count: {Count}</h3>
         </div>
           <div class="btn-container">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
    </div>
  )
}

export default App