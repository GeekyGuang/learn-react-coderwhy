import { useState } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import './switchTransition.css'

const SwitchDemo = () => {
  const [state, setState] = useState(false)
  return (
    <div>
    <SwitchTransition>
     <CSSTransition
       key={state ? "Goodbye, world!" : "Hello, world!"}
       addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
       classNames='fade'
     >
       <button onClick={() => setState(state => !state)}>
         {state ? "Goodbye, world!" : "Hello, world!"}
       </button>
     </CSSTransition>
   </SwitchTransition>
    </div>
  )
}

export default SwitchDemo