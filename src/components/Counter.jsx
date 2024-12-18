import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,reset } from '../StateMgt/counterSlice';


const Counter = () => {
    const dispatch= useDispatch();
    const counter=useSelector((state)=>state.counter.value);
    const handleincrement=()=>{
          dispatch(increment());
    }
    const handledecrement=()=>{
        dispatch(decrement());
  }
  const handlereset=()=>{
    dispatch(reset());
}
  return (
    <div>
         <p>Counter:{counter}</p>
       <button onClick={handleincrement}>Increment</button>
       <button onClick={handledecrement}>Decrement</button>
       <button onClick={handlereset}>Reset</button>
    </div>
  )
}

export default Counter
