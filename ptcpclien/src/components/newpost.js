import React from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
export default function newpost() {
  return (
    <div className='newpostwrapper mt-4 border border-cyan-300 rounded-md'>
        <div className='allelemnts p-3'>
            <div className="newpostTop flex flex-row">
                <img className="postProfileImg w-10 h-10 rounded-full border border-cyan-400" src='../assets/profile.png' alt="profile"/>
                <input placeholder="Whatin your happening in your classRoom"className="PostInput pl-3 min-w-full placeholder-cyan-500"/>
            </div>
            <hr className="shareHr mt-4" />
            <div className="newpostBottom ">
                <form className='inputform flex flex-row pt-2 '>
                    <div className="shareOption p-3 text-cyan-400">
                        <InsertPhotoIcon fill="currentColor" className="shareIcon" />
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <div className="shareOption p-3 text-cyan-400">
                        <AttachFileIcon fill="currentColor" className="shareIcon" />
                        <span className="shareOptionText">File</span>
                    </div>
                    <div className="shareOption p-3 text-cyan-400">
                        <VideocamIcon fill="currentColor" className="shareIcon" />
                        <span className="shareOptionText">Record</span>
                    </div>
                    <div className="shareOption p-3 text-cyan-400">
                        <EventIcon fill="currentColor" className="shareIcon" />
                        <span className="shareOptionText">Event</span>
                    </div>

                    <button className="shareButton p-3 text-cyan-400" type="submit">
                        Post
                    </button>
                </form>



            </div>
        </div>
        
    </div>

  )
}
