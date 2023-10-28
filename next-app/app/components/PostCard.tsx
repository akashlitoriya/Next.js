import React from 'react'
import {MdOutlineInsertComment} from 'react-icons/md'
import { useAppSelector } from '../redux/app'
type PostCardProps = {
    _id: string,
    attachment?: string,
    body: string,
    title: string,
}

const PostCard = ({
    _id,
    attachment,
    body,
    title,
}: PostCardProps) => {
  const user = useAppSelector((state) => state.auth);
  const [comment, setComment] = React.useState('');
  const [commentSection, setCommentSection] = React.useState(false);
  return (
    <div className='flex flex-col gap-3 shadow-md rounded-lg w-fit hover:scale-100 shadow-gray-700'>
      {
        attachment && (
            <img src = {attachment} height={100} className='h-[150px] object-contain rounded-t-lg' alt='post attachment' />
        )
      }
      <div className='flex flex-col gap-1 p-3'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <p>{body}</p>
      </div>
      <div className='p-3 border-t-[1px] border-gray-500 flex justify-between items-center'>
        <button onClick={() => setCommentSection(!commentSection)}><MdOutlineInsertComment /></button>
        <div className='text-sm font-medium'>
          {user.name}
        </div>
      </div>
      {
        commentSection && (
          <div>
            <input type='text' className='p-2 bg-gray-300 rounded-lg' placeholder='comment here'/>
          </div>
        )
      }
      
    </div>
  )
}

export default PostCard
