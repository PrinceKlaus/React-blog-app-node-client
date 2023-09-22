import React, { useContext } from 'react'
import { NewsData } from '../Assets/NewsData'
import FilterStoriesData from '../FilterStoriesData'
const LatestArticle = () => {
  const data=useContext(NewsData)
// console.log(data)

  return ( 
    <>
    <h1> Latest Article<hr className='underline'/></h1>
  <div className="LatestArticle">
    <FilterStoriesData type={"type4"} id={37} />       
<FilterStoriesData type={"type4"} id={48} />       
<FilterStoriesData type={"type4"} id={13} />       
<FilterStoriesData type={"type4"} id={54} />        

    <img src={data[35].images} alt="not found" className='LatestArticleImg' />
    </div>
</>

  )
}
export default LatestArticle;

// export default SectionHoc(LatestArticle);
