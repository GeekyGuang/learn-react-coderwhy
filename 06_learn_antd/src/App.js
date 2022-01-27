import React from "react";
import classNames from 'classnames'
import { Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      foo: true,
      isActive: true,
      loadings: true
    }
  }

  render(){
    const {loadings} = this.state
    return (
    <>
      <Space style={{ width: '100%' }}>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
      </Space>

      <Space style={{ width: '100%' }}>
        <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
      </Space>
    </>
    )
  }

  // render(){
  //   const {foo, isActive} = this.state
  //   return (
  //   <div>
  //     {/* 常规 React 添加class方法 */}
  //     <h2 className={"hello " + (isActive ? "world" : "")}>标题1</h2>
  //     <h2 className="foo bar active title">标题1</h2>
      
  //     {/* 使用classnames */}
  //     <h2 className={classNames({hello: foo, active: isActive})}>标题1</h2>
  //     <h2 className={classNames('a', 'b', 'c')}>标题1</h2>
  //     <h2 className={classNames({hello: foo}, 'world')}>标题1</h2>
  //   </div>
  // )}
}

export default App;
