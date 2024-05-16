import React from 'react';
import "../Styles/PostAdd.css"
import { useSelector } from 'react-redux';

const PostAdd = () => {
  const posts = useSelector((state)=>state.posts)
  return (
    <>
      <h3 className='m-5'>Social Media Post</h3>
      {posts.map((data)=> 
        <div className='container'>
          <h4>{data.title}</h4>
            <p>{data.content}</p>
              
            <p className='date'><label>Date:</label> {data.date}</p>
            <p ><label className='author'>Author:</label> {data.author? (data.author):" Unknown Author"}</p>
        </div>
      )}
    </>
  )
}

export default PostAdd