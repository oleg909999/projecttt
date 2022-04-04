import React, { useState } from "react";
 

const Counter = function() {
    const [count, setCount] = useState(0)
    const  [textiput, settextinput] = useState('Текстовые данные')
    function increment (){
        setCount(count +1)
      } 
      function decrement () {
        setCount(count -1)
      }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <br/>
             <h1>{textiput}</h1>

            <input 
      type="text" 
      value={textiput} 
      onChange={event => settextinput(event.target.value)}/>  <br/><br/>
        </div>
    )   
}

export default Counter;