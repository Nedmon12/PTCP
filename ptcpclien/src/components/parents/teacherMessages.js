import React,{useContext} from 'react'
import GroupIcon from '@mui/icons-material/Group';
import { AuthContext } from '../../context/AuthContext';
export default function ParentsMessages({teacher}) {
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} = useContext(AuthContext)
  console.log(teacher.firstname)
  return (
    <div className='RecentparenrtMessages w-full h-20 text-cyan-400 hover:bg-cyan-100 cursor-pointer flex flex-row'>
        <div className='profileplace basis-1/4 ' >
           <img className="postProfileImg h-10 w-10 m-2 rounded-full border border-cyan-400 object-cover" 
                            src={
                                teacher.profilePicture
                                  ? PF + teacher.profilePicture
                                  : PF + "profile/noAvatar.png"
                              } alt=""/>
        </div>
        <div className='Desc basis-3/4 ' >
            <div><span className="shareOptionText text-black text-sm">{teacher.firstname} {teacher.lastname}</span></div>
        
        </div>

    </div>
  )
}
