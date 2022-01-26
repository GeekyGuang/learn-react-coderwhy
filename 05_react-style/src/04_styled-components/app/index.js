import Home from "../home"
import Profile from "../profile"
import { AppWrapper } from "./style"
import styled, {ThemeProvider} from "styled-components"

const fn = (...args) => {
  console.log(args)
}
const a = 'apple'
const b = 'banana'

fn`hello ${a}, I love ${b}`

const Input = styled.input`
  background-color: lightblue;
  border: 1px solid yellow;
  
`
const Button = styled.button`
  background-color: ${props => props.theme.blueColor};
  color: ${props => props.theme.fontColor}
`

const CInput = styled(Input)`
  font-size: 30px;
  color: red;
`

const BInput = styled.input.attrs({
  placeholder: "banana",
  bgColor: "blue",

})`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-size: ${props => props.fontSize}
`

const App = () => {
  return (
    <ThemeProvider theme={{blueColor: "lightBlue", fontColor: "pink"}}>
    <Button>hello</Button>
    <AppWrapper>
      <CInput />
      <BInput fontSize="24px"   color="red"/>
      <Input type="password" placeholder="hello"/>
      <h1 className="title">我是App</h1>
      <p className="haha">哈哈哈哈哈哈哈</p>
      <Home />
      <Profile />
    </AppWrapper>
    </ThemeProvider>
  )
}

export default App