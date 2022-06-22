import React, {useState, useContext, useRef } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import Cancel from '@mui/icons-material/Cancel';
import { useNavigate } from "react-router";

import { AuthContext } from '../context/AuthContext';
import axios from "axios";

export default function Newpost() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const handleEvent = async (e) => {
      if(desc.current.value!==""){
      e.preventDefault();
      if(desc!==" "){
      const newPost = {
        userId: user.user._id,
        desc: desc.current.value,
      };
      if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name", fileName);
        data.append("file", file);
        newPost.img = fileName;
        console.log(newPost);
        try {
          await axios.post("api/upload", data);
        } catch (err) {}
      }
      try {
        await axios.post("api/posts/newpost", newPost);
        window.location.reload();
      } catch (err) {}
    };
  }
  }
  const eventtaker =()=>{
    navigate("/eventhome")
  }

  return (
    <div className='newpostwrapper mt-4 border border-cyan-300 rounded-md'>
        <form onSubmit={handleEvent} className='allelemnts p-3'>
            <div className="newpostTop flex flex-row">
                <img className="postProfileImg w-10 h-10 rounded-full border border-cyan-400" src={user.profilePicture
                ? PF + user.profilePicture
                : PF + "profile/noAvatar.png"} 
                alt="profile"/>
                <input ref={desc} placeholder="Whatin your happening in your classRoom"className="PostInput pl-3 min-w-full placeholder-cyan-500 outline-0	"/>
            </div>
            <hr className="shareHr mt-4" />
            {file && (
              <div className="shareImgContainer">
                <div className='flex flex-row-reverse' >
                <Cancel className="shareCancelImg cursor-pointer" onClick={() => setFile(null)} />
                </div>
                <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                
              </div>
             )}
            <div className="newpostBottom ">
                <div className='inputform flex flex-row justify-between pt-2 '>
                    <div className='inputform flex flex-row pt-2 ' >
                      <label htmlFor="photo" className="cursor-pointer shareOption p-3 text-cyan-400">
                          <InsertPhotoIcon fill="currentColor" className="shareIcon cursor-pointer" />
                          <span className="shareOptionText">Photo or Video</span>
                              <input
                                  style={{ display: "none" }}
                                  type="file"
                                  id="photo"
                                  accept=".png,.jpeg,.jpg"
                                  onChange={(e) => setFile(e.target.files[0])}
                              />
                          </label>
                      <button onClick={eventtaker} className="shareOption p-3 text-cyan-400 cursor-pointer">
                          <EventIcon fill="currentColor" className="shareIcon" />
                          <span className="shareOptionText">Event</span>
                      </button>
                    </div>
                    <button className="shareButton p-3 text-white font-bold bg-cyan-500 w-20 h-10 py-2 border-slate-500 rounded-lg" type="submit">
                        Post
                    </button>
                </div>



            </div>
        </form>
        
    </div>

  )
}
