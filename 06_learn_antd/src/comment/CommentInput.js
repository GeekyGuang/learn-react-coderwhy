import { Button, Input } from "antd"
import styled from 'styled-components'
const {TextArea} = Input
const CutstomTextArea = styled(TextArea)`
  color: red;
  border: 3px dashed pink !important;
`

const CommentInput = () => {
  return (
    <div style={{padding:"0 20px"}}>
      <CutstomTextArea rows={4}/>
      <Button style={{
        background: 'pink', 
        color: 'white', 
        border: "1px solid pink",
        marginTop: 20,
        fontSize: 24,
        height: 60,
        width: 300,
        borderRadius: 30}}>发表评论</Button>
    </div>
  )
}

export default CommentInput