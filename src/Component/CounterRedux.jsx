import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/features/counter/counterSlice"

const CounterRedux = () => {
    const dispatch = useDispatch()
    const { counter } = useSelector(state => state.counter)
    console.log(counter)
    return (
        <div>
            <button onClick={() => dispatch(decrement())} style={{ margin: "4px" }}>Descremnet</button>
            <span style={{ margin: "4px" }}> {counter} </span>
            <button onClick={() => dispatch(increment())} style={{ margin: "4px" }}>Increment</button>
        </div>
    )
}

export default CounterRedux
