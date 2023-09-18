import React, { useContext } from "react";
import {  useParams , useNavigate} from "react-router-dom";
import Top from "./Header/Top";
import { NewsData } from "../Assets/NewsData";
import './SingleAritcalStyle.css'
import PostedBy from "./PostedBy";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FilterStoriesData from "../FilterStoriesData";
import SouthIcon from '@mui/icons-material/South';
const SingleArtical = () => {
  const NewsArrayIndex = useParams();
  const navigate=useNavigate();//for back functionality
  const Id=NewsArrayIndex.NewsId-1;//for selecting that arr from Context API
  const data = useContext(NewsData);//form context API
  
 
//  more from siren random image logic 
const RandomImg1= Math.floor(NewsArrayIndex.NewsId/15.01 )*15+Math.floor(Math.random()*14)+1
const RandomImg2= Math.floor(NewsArrayIndex.NewsId/15.01 )*15+Math.floor(Math.random()*14)+1
const RandomImg3= Math.floor(NewsArrayIndex.NewsId/15.01 )*15+Math.floor(Math.random()*14)+1
// 1-15=bolly   // 5/15.01==>0.3==>0=>0*15=>0+random(1-15)
// 16-30=holly  // 20/15.01==>1.3 ==>1=>1*15=>15+random(1-15)
// 31-45=tech   // ==>2.something==>2=>2*15=>30+random(1-15)
//46-60=fitness // ==>50/15.01=>3.3=>3=>3*15=>45+random(1-15)
//for back functionality
function handleBack(){
  navigate(-1);
}
// onclicking on MORE from serien
  return (
    <div>
      <div className="SingleAritcalHeader">
        <button className="SingleAritcalBack" onClick={handleBack}>
          <SouthIcon  className="BackImg"/>
          Back</button>
        <Top />

      </div>
      <div className="middleContainer">
        <div className="clapNShare">
        <span className="clap1">
        <img className="clap1Img" src="/images/rythm@2x.png" alt="not found" />
        9.3K
          </span> 
          <span className="share">
          <img className="shareImg" src="/images/share@2x.png" alt="not found" />
          Share this article
          </span>
        </div>
      <div className="SingleAritcalBody">
    <div className="SingleAritcalHeading">{data[Id].heading}</div>
    <div className="writer">
      <PostedBy/>
      <div className="socialMedia">
        <FacebookIcon style={{color:'white',borderRadius:"5px", marginRight:'10px',fontSize:"20px"}}/>
        <TwitterIcon style={{color:'white',borderRadius:"5px", marginRight:'10px',fontSize:"20px"}}/>
        <InstagramIcon style={{color:'white',borderRadius:"5px",marginRight:'10px',fontSize:"20px"}}/>
        <YouTubeIcon style={{color:'white',borderRadius:"5px", marginRight:'10px',fontSize:"20px"}}/>
      </div>
    </div>
    <img className="SingleAritcalImage" src={data[Id].images} alt="Not Found"/>
    <div className="SingleAritcalDescription">
      {data[Id].description}
      </div>
    <div className="writerInfo">
    <span className="clap2">
        <img className="clap1Img" src="/images/rythm@2x.png" alt="not found" />
        9.3K claps
          </span> 
    <PostedBy/>
    </div>
    
    </div>  
      </div>
    

<h2 className="MoreFromSirenTittle">More From Siren</h2>

  <div className="MoreFromSiren" >
   <FilterStoriesData type={"type6"} id={RandomImg1}/>  
   <FilterStoriesData type={"type6"} id={RandomImg2}/>  
   <FilterStoriesData type={"type6"} id={RandomImg3}/>  
     
  </div>
   

    </div>
  );
};

export default SingleArtical;
