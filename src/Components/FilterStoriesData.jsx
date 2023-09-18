import React,{useContext} from 'react'
import { NewsData } from './Assets/NewsData'
import Stories from './GenericComonents/Stories';
import ErrorHandler from '../Pages/ErrorHandler'
function FilterStoriesData(props) {
  const data=useContext(NewsData)[props.id-1];
//  console.log(props)
//   console.log("nic",data.heading,props.type)

 if(props.type==="type2"){//latest stories
    return   <Stories  id={props.id} type={props.type} heading={data.heading} description={data.description} descriptionLength={'47'} date={data.date} categories={data.categories}/>

}
 if(props.type==="type3"){//the latest
    return   <Stories id={props.id} type={props.type} images={data.images} heading={data.heading} description={data.description} descriptionLength={'15'} date={data.date} categories={data.categories}/>  

}else if(props.type==="type4"){//top stories
    return   <Stories id={props.id} type={props.type} images={data.images} heading={data.heading} description={data.description} descriptionLength={'9'} date={data.date} categories={data.categories}/>


}else if(props.type==="type5"){//top posts
    return   <Stories id={props.id} type={props.type} counter={props?.counter} images={data.images} heading={data.heading} date={data.date} categories={data.categories}/>


}else if(props.type==="type6"){//more from siren
    return   <Stories id={props.id} type={props.type} images={data.images} heading={data.heading} categories={data.categories}/>

}
else{
    return  <ErrorHandler/>


}
}
export default FilterStoriesData