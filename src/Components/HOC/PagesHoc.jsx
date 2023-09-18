import React from 'react'
import './PagesHocStyle.css'
import Navbar from '../GenericComonents/Header/Navbar';
import TopStories from '../Sections/TopStories';
import TopPost from '../Sections/TopPost';

 
const PagesHoc = () => {
  const Hoc=(props)=>{   
    return (
      <>
  <Navbar/>
    <div className='PagesHoc' id='PagesHoc'>
  <div className="topStoriesPage">
    <span className='TopStoriesPageSpan' >{props.name}<hr className='underline'/></span>
  <TopStories initialIds={props.initialIds}/>
  </div>
<div className="TopPostPage">
<span >TopPost<hr className='underline'/></span>
<TopPost initialIds={props.initialIds}/>
<img className="adv" style={{objectFit:"contain" ,height:"300px"}} alt="not found"src="https://images.unsplash.com/photo-1518103744022-a2121047f429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWRzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
</div>
    </div>
</>
  )
  }
  return Hoc;

}
export default PagesHoc;
