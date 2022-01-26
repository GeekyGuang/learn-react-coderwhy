import Home from "../home"
import Profile from "../profile"
import style from  './style.module.css'


const App = () => {
  return (
    <div>
      <h1 className={style.title}>我是App</h1>
      <p className={style['new-p']}>哈哈哈哈哈哈哈</p>
      <Home />
      <Profile />
    </div>
  )
}

export default App