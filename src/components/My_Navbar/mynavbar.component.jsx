import React, {useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import *as FaIcons from "react-icons/fa";
import *as AiIcons from "react-icons/ai";
import {SideBarData} from './SideBarData'
import './sidebar.css';
import {IconContext} from 'react-icons';


const Mynavbar = () =>
{
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () =>setSidebar(!sidebar)
    return (
    <>
    <IconContext.Provider value={{color:'#fff'}}> 
    <Navbar collapseOnSelect expand="lg" className='color-nav' >
      {/* bg="dark"> */}
  <Navbar.Brand
   href="#home">
     </Navbar.Brand>
     <div className='sidebardata'>
          <Link to ='#' className='menu-bars'></Link>
          <FaIcons.FaBars onClick={showSidebar}/>
          <span className='name'>Pratyush</span>
      </div>
      <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
        <ul className='nav-menu-items'  onClick={showSidebar}>
          <li className = "navbar-toggle">
            <Link to='#' className = 'menu-bars'>
              <AiIcons.AiOutlineClose/> 
            </Link>
            <span className='name'>Pratyush</span>
          </li>
          {SideBarData.map((item,index)=>
          {
            return (
              <li key = {index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>
                    {item.title}
                  </span>
                </Link>
              </li>
            )
          } )}
        </ul>
      </nav>
  <div className= 'right-menu'>    
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
  </div>
</Navbar>

</IconContext.Provider>
    </>)
}

export default Mynavbar
