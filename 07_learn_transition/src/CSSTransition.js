import {useState} from 'react'
import {CSSTransition} from 'react-transition-group'

const CSSTransitionComponent = () => {
  const [inProp, setInProp] = useState(true);
  return (
    <div>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
      <CSSTransition appear in={inProp} timeout={200} classNames="my-node" unmountOnExit={true}>
        <div>
          "I'll receive my-node-* classes"
        </div>
      </CSSTransition>

    </div>
  );
}

export default CSSTransitionComponent