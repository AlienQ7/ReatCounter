import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
   // Logic Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => {
  // Ternary logic to prevent going below zero
  setCount(count > 0 ? count - 1 : 0);
  };

  const reset = () => setCount(0);
  return (
        
        <div className="sci-fi-frame">
 	 <div className="counter-container">
	    <div className="scanner-line"></div>
		<h2 className="label">SYSTEM_STATUS: ACTIVE</h2>
	   	 	<h1 className="count-display">
	      			<span className="unit">Counter:</span>
	     	 		{count.toString().padStart(2, '0')}
	    		</h1>
	    <div className="button-group">
	      <button className="btn btn-inc" onClick={increment}>// INCREMENT //</button>
	      <button className="btn btn-dec" onClick={decrement}>// DECREMENT //</button>
	      <button className="btn btn-reset" onClick={reset}>// RESET //</button>
	    </div>
	  </div>
	</div>
        );
  }
export default Counter;                                                                          
