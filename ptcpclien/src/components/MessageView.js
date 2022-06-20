import React from 'react'
import {format} from 'timeago.js'
export default function MessageView({message, own}) {
  return (
    <div className={own ? "message own mt-3 ml-96 ":"message mt-3" }>
        <div>
            <div className='MessageContent '>
                <span className={own ? 'bg-cyan-500 rounded-md p-2 text-white max-w-md':'bg-cyan-50 rounded-md p-2 text-black max-w-md'} >{message.text}</span>
            </div>
            <div className='MessageTime mt-1'>
                <span className='text-sm text-gray-500 p-2' >{format(message.createdAt)}</span>
            </div>
        </div>
    </div>

  )
}
