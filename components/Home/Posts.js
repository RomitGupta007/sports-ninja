import React, { useEffect, useState } from 'react'
import PostItem from './PostItem';


export default function Posts({posts}) {

  useEffect(()=>{
    console.log(posts);
    
  },[posts])
  return (
    <div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-5 px-10 cursor-pointer">
        {posts.map((item) => (
          <div
            
          >
            <PostItem post={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
