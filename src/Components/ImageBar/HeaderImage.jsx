import React,{useContext} from 'react'
import './HeaderImageStyle.css'
import { NewsData } from '../Assets/NewsData'
function HeaderImage() { 
const data=useContext(NewsData)


  return (
    <div className='HeaderImage'>
      {/* HeaderImage1 */}
 <div className='HeaderImage1'>
  <img src={data[2].images} alt="HeaderImage1"  className='HeaderImg'/>
  <span className='headerText'>
  <span>{data[2].heading.slice(0,30)+"..."}</span>  
   <span> {data[2].date.slice(1)}</span>
  </span>
  </div>
  {/* HeaderImage2 */}
 <div className='HeaderImage2'>
  <img src={data[54].images} alt="HeaderImage2"  className='HeaderImg'/>
  <span className='headerText'>

    <span>{data[54].heading.slice(0,25)+"..."}</span>  
   <span> {data[54].date.slice(1)}</span>
  </span>
  </div>
  {/* HeaderImage3 */}
 <div className='HeaderImage3'>
  <img src={data[39].images} alt="HeaderImage3"  className='HeaderImg'/>
  <span className='headerText'>
  <span>{data[39].heading.slice(0,25)+"..."}</span>  
   <span> {data[39].date.slice(1)}</span>

  </span>
  </div>
    
    </div>
  )
}

export default HeaderImage
