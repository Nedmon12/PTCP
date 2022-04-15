import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirPlaneIcon,}
    from '@heroicons/react/outline'
import {HeartIcon as heartIconFilled} from '@heroicons/react/solid'
import Image from 'next/image'
function post({id, username, classpost, timeafterpost, userimg, img , caption}) {
  return (
      <div className="px-4 my-7 border rounded-sm">
        
        {/* header */}
            <div className="flex items-center p-5">
                <img src={userimg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
                 alt=""></img>
                <p className="p-5 flex-1 font-bold">{username}</p>
                <p className="flex-1">{classpost}</p>
                <p className="flex-1">{timeafterpost} </p>
            </div>

        {/* image container  */}
        <img src={img} className="object-cover w-full"/>
        {/* caption */}
        <div>
            <p className="p-5">{caption}</p>
        </div>
        {/* button */}

        

        {/* comment */}

        {/* imputbox */}    

    </div>
  )
}

export default post