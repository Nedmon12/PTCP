import React from 'react'

export default function MessageView({own}) {
  return (
    <div className={own ? "message own mt-3 mr-3 flex flex-row-reverse ":"message mt-3" }>
        <div>
            <div className='MessageContent '>
                <span className={own ? 'bg-cyan-500 rounded-md p-2 text-white max-w-md':'bg-cyan-50 rounded-md p-2 text-black max-w-md'} >hello teacher jara last week we had a discusion about my son how is he doing?</span>
            </div>
            <div className='MessageTime mt-1'>
                <span className='text-sm text-gray-500 p-2' >1 hours ago</span>
            </div>
        </div>
    </div>

  )
}
