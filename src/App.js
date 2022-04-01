import React, { useState } from 'react';
import Counter from './Components/Counter';
import "./styles/App.css"; 

function App() {
  const  [textiput, settextinput] = useState('Текстовые данные')
  return (
    <div className="App">
      <Counter/>
      <h1>{textiput}</h1>
      <input 
      type="text" 
      value={textiput} 
      onChange={event => settextinput(event.target.value)}/>  <br/><br/>
        <div className="post">
          <div className="post__container">
            <strong> JS JS JS</strong>
            <div>
               JS - is hard
            </div>
          </div>
          <div className="post__btns" >
            <button>Удалить</button>
          </div>
        </div>
    </div>
    
  );
}

export default App;
