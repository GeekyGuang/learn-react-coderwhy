import React from "react";
import classNames from 'classnames'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      foo: true,
      isActive: true
    }
  }

  render(){
    const {foo, isActive} = this.state
    return (
    <div>
      {/* 常规 React 添加class方法 */}
      <h2 className={"hello " + (isActive ? "world" : "")}>标题1</h2>
      <h2 className="foo bar active title">标题1</h2>
      
      {/* 使用classnames */}
      <h2 className={classNames({hello: foo, active: isActive})}>标题1</h2>
      <h2 className={classNames('a', 'b', 'c')}>标题1</h2>
      <h2 className={classNames({hello: foo}, 'world')}>标题1</h2>
    </div>
  )}
}

export default App;
