import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
function post({post}) {
    console.log(post)
  
    return (
    <div className=" my-7 border border-cyan-300 rounded-lg">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft flex justify-between pt-3 px-3" >
                    <div className='flex flex-row'>
                        <img className="postProfileImg h-10 w-10 rounded-full border border-cyan-400 object-cover" src={post.userimg} alt=""/>
                        <div className='flex flex-col'>
                            <span className="postUsername text-bs font-bold ml-3">{post.username}</span>
                            <span className="teacherClass text-sm text-gray-600 ml-3">{post.classpost}</span>
                        </div>
                    </div>
                    <span className="postDate ">{post.timeafterpost}</span>
                </div>    
            </div>
        <hr className="PostHr mt-4" />    
        <div className="postCenter mt-3">
            <span className="postText  px-5">{post.caption}</span>
            <img className="postImg w-full mt-3 max-h-96 object-cover" src={post.img} alt="" />  
            <div className='mt-3 pl-3 flex flex-row text-gray-500 text-xs'>
                <div className='likeno'>
                    <ThumbUpIcon className='pl-2'/>    
                    <span className="postLikeCounter pl-2">{post.nooflike}</span>
                    <span className="postlikename pl-2 pr-12">Likes</span>    
                </div>
                <div classname='commentno'>
                    <CommentIcon classname='pl-2'/>
                    <span className='postLikeCounter pl-2'>{post.noofcomments}</span>
                    <span className='postLikeCounter pl-2'>comments</span>   
                </div>                
            </div>
        </div>
        <hr className="PostHr mt-4" />
        <div className="postBottom flex justify-between text-cyan-400">
            <div className="postBottomLeft flex flex-row">
                <div className='border border-cyan-200 rounded-lg m-4 p-3'>
                    <ThumbUpIcon/>
                    <span className="postLikeCounter">like</span>
                </div>
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

export default post