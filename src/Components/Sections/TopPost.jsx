import React from 'react'
import '../Sections/SectionsStyle.css'
import FilterStoriesData from '../FilterStoriesData';
function TopPost(props) {

   let a=props.initialIds?props.initialIds:3;
   let b=props.initialIds?props.initialIds+3:43;
   let c=props.initialIds?props.initialIds+6:31;
   let d=props.initialIds?props.initialIds+8:54;

    return (
    <div className="TopPost">
        <div>
    <FilterStoriesData type={"type5"} id={a} counter={"1"} />       
     </div>
        <div>
    <FilterStoriesData type={"type5"} id={b} counter={"2"} />       
     </div>
        <div>
    <FilterStoriesData type={"type5"} id={c} counter={"3"} />       
     </div>
        <div>
    <FilterStoriesData type={"type5"} id={d} counter={"4"} />       
     </div>
      
      
    
     
  </div>
 
  ) 
}
export default TopPost;
