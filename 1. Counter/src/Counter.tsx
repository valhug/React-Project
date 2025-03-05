import  React, { useState } from "react"

/* import "./style.css" */

function Counter () {
    const [count, setCount] = useState<number>(0)

    return (
        <>
        <div className="container">
            <h1 className="number">{count}</h1>    
        </div>

        <section className="btns-container">
            <button onClick={() => setCount(count + 1)} >+ Increment</button>
            <button onClick={() => setCount(count - 1)} >- decrement</button>
            <button onClick={() => setCount(count * 0)} > reset</button>
            
        </section>
        </>

       
    )
}
export default Counter