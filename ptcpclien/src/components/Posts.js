import React from 'react'
import Post from './Post'

const posts= 
[
    {
        id:"123",
        username:"nedval",
        classpost:"grade 8",
        timeafterpost:"mar 20",
        userimg:"https://media-exp1.licdn.com/dms/image/C4D22AQEqhiCm0UxrnA/feedshare-shrink_2048_1536/0/1631386321019?e=1650499200&v=beta&t=880xvMBE4jIaNc1pU_Rn3SzB-5swA0vMf-MAiJyYyQY",
        img:"https://i0.wp.com/ilinkstudents.com/wp-content/uploads/2018/07/iLink_Students_Sample_Image_2.jpg?fit=1688%2C1688&ssl=1",
        caption:"i think we progressed 1% out of 100",
    },
    {
        id:"123",
        username:"jara guta",
        classpost:"grade 8",
        timeafterpost:"mar 20",
        userimg:"https://media-exp1.licdn.com/dms/image/C4D22AQEqhiCm0UxrnA/feedshare-shrink_2048_1536/0/1631386321019?e=1650499200&v=beta&t=880xvMBE4jIaNc1pU_Rn3SzB-5swA0vMf-MAiJyYyQY",
        img:"https://i0.wp.com/ilinkstudents.com/wp-content/uploads/2018/07/iLink_Students_Sample_Image_2.jpg?fit=1688%2C1688&ssl=1",
        caption:"i think we progressed 1% out of 100",
    },
];


function Posts() {
  return (
        <div >
            {posts.map((post)=>(
                <Post 
                key={post.id} 
                id={post.id} 
                username={post.username}
                classpost={post.classpost}
                timeafterpost={post.timeafterpost} 
                userimg={post.userimg} 
                img={post.img} 
                caption={post.caption} 
                />
            ))}
            
           
        </div>
    )
}

export default Posts