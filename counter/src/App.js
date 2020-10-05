import React from 'react';
import './App.css';


function App() {
  var counter =0;
  return (
    <div className="App">
      INCREDIBLE COUNTER
      <p><button onClick={() => counter+=1}>
        INCREASE
      </button>
      <button onClick={() => counter-=1}>
          DECREASE
      </button>
        </p>
        <p>
  Current COUNTER VALUE: {counter}
        </p>
    </div>
  );
}


export default App;
