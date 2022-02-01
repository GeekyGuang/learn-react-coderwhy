import {useState} from 'react'
import {CSSTransition} from 'react-transition-group'

const CSSTransitionComponent = () => {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Enter
      </button>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div>
        {inProp ? <div>
          "I'll receive my-node-* classes"
        </div> : ''}
        </div>
      </CSSTransition>

    </div>
  );
}

export default CSSTransitionComponent