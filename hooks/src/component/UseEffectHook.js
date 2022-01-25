import React, { useState, useEffect } from 'react';
function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [changeIt, setChangeIt] = useState(2)
  const [name, setName] = useState('')

  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {
    console.log("component is updating with useEffect")    
    document.title = `You clicked ${changeIt} times`;  },[]);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <input type="text" value={name} onChange={e=> setName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h4>{changeIt}</h4>
      <button  onClick={() => setChangeIt(changeIt +3)}>changeIt</button>
    </div>
  );
}
export default UseEffectHook;