import React, { useState, useEffect, useContext } from 'react'
import GroupIcon from '@mui/icons-material/Group';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function ParentsMessages({student}) {
  const {user}= useContext(AuthContext)
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [parent, setparent] = useState();
  console.log(student._id)
  useEffect(() => {
    const fetchParent = async () => {
      const res = await axios.get("/api/studentManagmentRoutes/fetchmystudentparent/"+student._id);
      setparent(res.data);
    };
    fetchParent();
  }, [user.user._id]);
  console.log(parent._id)
  return (
    <div className='RecentparenrtMessages w-full h-20 text-cyan-400 hover:bg-cyan-100 cursor-pointer flex flex-row'>
        <div className='profileplace basis-1/4 ' >
        <img className="postProfileImg h-10 w-10 rounded-full border border-cyan-400 object-cover" 
                            src={
                                user.user.profilePicture
                                  ? PF + user.profilePicture
                                  : PF + "profile/noAvatar.png"
                              } alt=""/> 
        </div>
        <div className='Desc basis-3/4 ' >
            <div><span className="shareOptionText text-black text-sm">{student.firstname} {student.lastname}'s Parent</span></div>
            <div><span className="shareOptionText text-gray-500 text-xs">I recieved</span></div>
        </div>

    </div>
  )
}
