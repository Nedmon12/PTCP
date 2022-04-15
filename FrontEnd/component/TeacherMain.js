import React from 'react'
import Posts from './Posts'
function TeacherMain() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto" > 
        <h1>this is teacher main containing classstory, events , messages and all teachers </h1>
        {/*news feed or class story event poster and reviews*/}
     
        {/*new post*/}
        
        {/*postshower*/}
        <Posts/>
         {/*event poster*/}
    </div>
  )
}

export default TeacherMain