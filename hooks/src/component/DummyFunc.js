import React, {useState, useEffect} from 'react'

function DummyFunc() {
    const [count, setCount]= useState(0);
    const [name, setName] = useState("tahir");
    const handleClick= () => setName("abdullah")
    useEffect(()=>{
        console.log("component is currently using useEffect")
        document.title = 'you clicked ${count} times'
    })
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=> setCount(count+1)}>Click me</button>
            <button onClick={handleClick}>Increment by 3(handleClick)</button>
            <p>{name}</p>
            

            
        </div>
    )
}

export default DummyFunc
