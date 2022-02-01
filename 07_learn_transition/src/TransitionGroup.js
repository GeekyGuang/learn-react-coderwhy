import { useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import './transitionGroup.css'

const TransitionGropDemo = () => {
  const [personList, setPersonList] = useState(['jack', 'rose', 'luke'])
  const addName = () => {
    setPersonList([...personList, 'hello'])
  }
  const removeItem = (index) => {
     const copy = [...personList]
     copy.splice(index, 1)
     setPersonList(copy)
  }

  return (
    <TransitionGroup>
      {personList.map((item,index) => <CSSTransition timeout={500} key={item} classNames="item">
        <div>
          <span>{item}</span> <button onClick={() => removeItem(index)}>-</button>
        </div>
      </CSSTransition>)}

      <button onClick={addName}>添加名字</button>
    </TransitionGroup>
  )
}

export default TransitionGropDemo