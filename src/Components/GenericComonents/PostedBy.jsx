import React from 'react'
import './PostedByStyle.css'
const PostedBy = () => {
  return (
    <div className='PostedBy'>
      <img className='PostedByImg' src="/images/profile.jpg" alt="not found" />
      <div className="ProfileName">Prince Verma</div>
      <div className="ProfileDate"> Aug 19, 2023 · 10 min read</div>
    </div>
  )
}

export default PostedBy
