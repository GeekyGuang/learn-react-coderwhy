import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment': 
        console.log(action.payload)
        return {...state, count: state.count + action.payload} 
    case 'decrement':
        return {...state, count: state.count - action.payload} 
    default: 
        return state
  }
}

export default function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  return <div>
     <div>{state.count}</div>
     <button onClick={() => dispatch({type:'increment', payload:2})}>+2</button>
     <button onClick={() => dispatch({type:'decrement', payload:1})}>-1</button>
  </div>;
}
