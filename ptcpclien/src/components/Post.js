import React, {useEffect, useContext, useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { AuthContext } from '../context/AuthContext';
import { format } from "timeago.js";
import axios from 'axios';

function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const {user}= useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    
    useEffect(() => {
        setIsLiked(post.likes.includes(user.user._id));
            }, [user._id, post.likes]);

    const likeHandler = () => {
        try {
          axios.put("api/posts/" + post._id + "/like", { userId: user.user._id });
        } catch (err) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };


    console.log(post)
    
    return (
    <div className=" my-7 border border-cyan-300 rounded-lg">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft flex justify-between pt-3 px-3" >
                    <div className='flex flex-row'>
                        <img className="postProfileImg h-10 w-10 rounded-full border border-cyan-400 object-cover" 
                        src={
                            user.user.profilePicture
                              ? PF + user.profilePicture
                              : PF + "profile/noAvatar.png"
                          } alt=""/>
                        <div className='flex flex-col'>
                            <span className="postUsername text-bs font-bold ml-3">{user.user.username}</span>
                            <span className="teacherClass text-sm text-gray-600 ml-3">{user.user.resposibleclass}</span>
                        </div>
                    </div>
                    <span className="postDate ">{format(post.createdAt)}</span>
                </div>    
            </div>
        <hr className="PostHr mt-4" />    
        <div className="postCenter mt-3">
            <span className="postText  px-5">{post.desc}</span>
            <img className="postImg w-full mt-3 max-h-96 object-cover" src={PF + post.img} alt="" />  
            <div className='mt-3 pl-3 flex flex-row text-gray-500 text-xs'>
                <div className='likeno'>
                    <ThumbUpIcon className='pl-2 ' />    
                    <span className="postLikeCounter pl-2">{like}</span>
                    <span className="postlikename pl-2 pr-12">Likes</span>    
                </div>
                <div classname='commentno'>
                    <CommentIcon classname='pl-2'/>
                    <span className='postLikeCounter pl-2'>{post.comments}</span>
                    <span className='postLikeCounter pl-2'>comments</span>   
                </div>                
            </div>
        </div>
        <hr className="PostHr mt-4" />
        <div className="postBottom flex justify-between text-cyan-400">
            <div className="postBottomLeft flex flex-row">
                <button className='border border-cyan-200 rounded-lg m-4 p-3' onClick={likeHandler}>
                    <ThumbUpIcon/>
                    <span className="postLikeCounter">{isLiked ? " Dislike":" Like"}</span>
                </button>
                <div className='border border-cyan-200 rounded-lg m-4 p-3' >
                    <CommentIcon/>
                    <span className="postCommentText">comment</span>
                </div>  
            </div>
            <div className="postBottomRight border border-cyan-200 rounded-lg m-4 p-3">
                <MoreVertIcon/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post