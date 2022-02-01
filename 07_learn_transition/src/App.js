import CSSTransitionComponent from "./CSSTransition";
import './style.css'
import SwitchDemo from "./SwitchTransition";
import TransitionGropDemo from "./TransitionGroup";

function App() {
  return (
    <div className="App">
      <CSSTransitionComponent />
      <SwitchDemo />
      <TransitionGropDemo />
    </div>
  );
}

export default App;
