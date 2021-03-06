import React from "react";
import {NavLink} from"react-router-dom";
import "./Nav.css";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai"; 
import { BiHomeAlt } from "react-icons/bi"; 
// import Posts from "../Posts/Posts";


const Nav = () => {
 
  return (
    <div>
    <nav>
    <NavLink to="/"><BiHomeAlt/></NavLink>
    <NavLink to="/About"><AiOutlineUser/></NavLink>
    <NavLink to="/Contact"><AiOutlineContacts/></NavLink>
    <NavLink to="/Posts"><AiOutlineContacts/></NavLink>
    </nav>
    </div>
  );
};

export default Nav
