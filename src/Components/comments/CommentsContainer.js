import React from 'react'
import { commentsData } from './mockComments'
import Comment from './Comment'
import { formatCount } from '../../Utils/constants'




const CommentList = ({comments}) =>{
    return comments.map((comment, index)=>
        <div key={index}>
        <Comment data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
            <CommentList comments={comment.replies} />
        </div>
        </div>
    )
}

const CommentsContainer = ({commentCount}) => {
  return (
    <div>
    <h2 className="text-md font-medium">{formatCount(commentCount)} Comments</h2>
    <hr className="my-2" />
   <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
