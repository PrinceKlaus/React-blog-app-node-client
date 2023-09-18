import React from 'react'
import HeaderImage from '../Components/ImageBar/HeaderImage'
import './HomeStyle.css'
import Navbar from '../Components/GenericComonents/Header/Navbar'
import LatestArticle from '../Components/Sections/LatestArticle'
import TheLatest from '../Components/Sections/TheLatest'
import LatestStories from '../Components/Sections/LatestStories'
import TopPost from '../Components/Sections/TopPost'
function Home() {

  return (

 <>
    <Navbar/> 
<HeaderImage/>
<div className="upper">
<h1>The Latest<hr className='underline'/></h1>
<TheLatest/>

</div>
  <div className="mid">
<div className="midFirst">
  
<LatestArticle />


</div>
<div className="midSecond">
<h1> TopPost<hr className='underline'/></h1>
<div className='TopPost'>
<img className='adv' src="https://images.unsplash.com/photo-1518103744022-a2121047f429?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWRzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="not found" />
<TopPost/>

</div>
</div>
  </div>
  <div className="bottom">
<LatestStories/>
  </div>

 </>
  )
}

export default Home