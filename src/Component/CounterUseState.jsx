import { useState } from "react"

const CounterUseState = () => {
    const [counter, setCounter] = useState(0)
    const descrement = () => {
        setCounter(counter - 1)
    }
    const increment = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <button onClick={descrement} style={{margin:"4px"}}>Descremnet</button>
            <span style={{margin:"4px"}}> {counter} </span>
            <button onClick={increment} style={{margin:"4px"}}>Increment</button>
        </div>
    )
}

export default CounterUseState
