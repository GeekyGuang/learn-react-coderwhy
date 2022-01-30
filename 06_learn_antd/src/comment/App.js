import { useEffect, useState } from "react"
import CommentInput from "./CommentInput"
import CommentItem from "./CommentItem"

const App = () => {
  const [comments, setComments] = useState([])

  const commitComment = (newComment) => {
    if(newComment === '') return
    setComments([...comments, newComment])
  }

  useEffect(() => {
    console.log(comments)
  }, [comments])

  const removeItem = (index) => {
    const commentsCopy = [...comments]
    commentsCopy.splice(index, 1)
    setComments(commentsCopy)
  }

  return (
    <div>
      {comments.map((item,index) => <CommentItem comment={item} key={index} removeItem={() => removeItem(index)}/>)}
      
      <CommentInput commitComment={commitComment}
          />
    </div>
  )
}

export default App