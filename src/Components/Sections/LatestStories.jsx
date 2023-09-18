import React from 'react'
import FilterStoriesData from '../FilterStoriesData';
const LatestStories = () => {

  return (
    <>
    <h1>LatestStories<hr className='underline'/></h1>
     <div className='LatestStories'>
    <FilterStoriesData type={"type2"} id={3} />       
    <FilterStoriesData type={"type2"} id={43} />       
    <FilterStoriesData type={"type2"} id={33} />       
  
    </div>
    </>
   
  )
} 
export default LatestStories;
