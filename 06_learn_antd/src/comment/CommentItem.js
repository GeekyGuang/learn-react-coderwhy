import {Comment, Tooltip, Avatar} from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const CommentItem = (props) => {
  const { avatar, comment, user, createTime } = props.comment
  const actions = [
    <span onClick={props.removeItem}><DeleteOutlined />删除</span>
  ]
  return (
    <div>
      <Comment
      actions={actions}
      author={<span>{user}</span>}
      avatar={<Avatar src={avatar} alt="Han Solo" />}
      content={
        <p>
          {comment}
        </p>
      }
      datetime={
        <Tooltip title={createTime}>
          <span>{dayjs(createTime).locale('zh-cn').fromNow()}</span>
        </Tooltip>
      }
    />
    </div>
  )
}

export default CommentItem