import React,{useContext} from 'react'
import { NewsData } from '../Assets/NewsData';
import '../Sections/SectionsStyle.css'
import SouthIcon from '@mui/icons-material/South';
import FilterStoriesData from '../FilterStoriesData';
const TopStories=(props)=> {


    const data=useContext(NewsData);// getting news data 
    
     return (
    <>
     {
     data.map((item,index)=>{
      return(
        <div key={index}>
    <FilterStoriesData type={"type4"} id={item.id} />       
     </div>
      )
      
     }) .slice(props.initialIds,props.initialIds +8)    
     
    
     }
     <div className='loadMore1'><SouthIcon style={{fontSize:"15px",color:"red"}}/> Load More</div>
 
   </>
 
  ) 
  
 
}

export default TopStories;