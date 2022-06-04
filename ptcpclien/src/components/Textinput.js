import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export default function Textinput() {
  return (
    <div className='textinput flex flex-row' >
        <div className='basis-2/12 border flex flex-row' >
            <div className="shareOption p-3 text-cyan-400">
                <AttachFileIcon fill="currentColor" className="Attactfile" />
            </div>
            <div className="shareOption p-3 text-cyan-400">
                <ImageIcon fill="currentColor" className="AttactImage" />
            </div>
            <div className="shareOption p-3 text-cyan-400">
                <EmojiEmotionsIcon fill="currentColor" className="AttactEmojies" />
            </div>
        </div>
        <div className='basis-8/12' >
            <input placeholder="Type Message"className="PostInput pl-3 w-full placeholder-cyan-500 h-full border" />
        </div>
        <div className='basis-2/12' >
            <button className=" w-full SendButton p-3 text-white bg-cyan-500 " type="submit ">
                            Send
            </button>
        </div>
        

    </div>
  )
}
