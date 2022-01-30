import { Button, Input } from "antd"
import styled from 'styled-components'
import { useState } from "react"
import * as dayjs from 'dayjs'
const {TextArea} = Input
const CutstomTextArea = styled(TextArea)`
  color: red;
  border: 3px dashed pink !important;
`


const CommentInput = (props) => {
  const {commitComment} = props
  const [newComment, setNewComment] = useState('')
  const handleInput = (e) => {
    setNewComment( e.target.value)
  }
  return (
    <div style={{padding:"20px"}}>
      <CutstomTextArea rows={4} value={newComment} onChange={handleInput}/>
      <Button style={{
        background: 'pink', 
        color: 'white', 
        border: "1px solid pink",
        marginTop: 20,
        fontSize: 24,
        height: 60,
        width: 300,
        borderRadius: 30}}
        onClick={() => {
          if(newComment === '') return
          const comment = {
            id: dayjs().valueOf(),
            user: 'jack',
            avatar: 'https://pic.qqtn.com/up/2019-9/15690311636958128.jpg',
            createTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            comment: newComment           
          }
          setNewComment('')
          commitComment(comment)

        }}
        >发表评论</Button>
    </div>
  )
}

export default CommentInput