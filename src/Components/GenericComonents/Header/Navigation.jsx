import React,{useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';


function Navigation() {
    const [isClick,setIsClick]=useState(false);
    const [className,setClassName]=useState('closeHamburger');
    const [navClassName,setNavClassName]=useState("nav");

    const handleClick=()=>{
        setIsClick(!isClick);
      
        if(!isClick) {
          setClassName('openHamburger') //==>x
           setNavClassName('openNav')  //vertically nav bar 
        }else{//click =true display none
          setClassName('closeHamburger')//close 
          setNavClassName('nav')//display none

        }
    }
  return (
    <>
    <div className='hamburger' onClick={handleClick}>
 <div className={className}></div>
 <div className={className}></div>
 <div className={className}></div>
 </div>
 <div className={navClassName}>
    <NavLink  onClick={handleClick} to='/'          style={({ isActive }) => ({  color: isActive ? 'white' : 'black' })} >Home</NavLink>
    <NavLink  onClick={handleClick} to='/Bollywood' style={({ isActive }) => ({  color: isActive ? 'white' : 'black' })} >Bollywood</NavLink>
    <NavLink  onClick={handleClick} to='/Hollywood' style={({ isActive }) => ({  color: isActive ? 'white' : 'black' })} >Hollywood</NavLink>
    <NavLink  onClick={handleClick} to='/Technology'style={({ isActive }) => ({  color: isActive ? 'white' : 'black' })} >Technology</NavLink>
    <NavLink  onClick={handleClick} to='/Fitness'   style={({ isActive }) => ({  color: isActive ? 'white' : 'black' })} >Fitness</NavLink>
    <NavLink  onClick={handleClick} to='/Food'      style={({ isActive }) => ({  color: isActive ? 'white' : 'black' })} >Food</NavLink>
  </div>


 </>
  )
}

export default Navigation