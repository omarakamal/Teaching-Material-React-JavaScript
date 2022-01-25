import React, { useState } from 'react';

function Hook() {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  const [count, setCount] = useState(0)
  const handleClick= () => setCount(count+3);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>
        setCount function
      </button>
      <button onClick={handleClick}>
        handleClick function
      </button>
    </div>
  );
}

export default Hook;