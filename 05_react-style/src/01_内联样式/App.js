const pStyle = {
  color: "pink",
  textDecoration: "underscore"
}


const App = () => {
  return (
    <div>
      <h2 style={{fontSize:32, color: "red"}}>我是一只鱼</h2>
      <p style={pStyle}>我喜欢游泳</p>
    </div>
  )
}

export default App