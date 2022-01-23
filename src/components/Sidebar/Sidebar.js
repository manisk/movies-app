import React from "react";
import './Sidebar.scss'
import {NavLink, useLocation} from 'react-router-dom'
function Sidebar(){
  const location = useLocation();

    return(
        <div className="sidebar-container">
           <ul>
               <li  className={`movies-list ${location.pathname === '/admin' ? 'active' : ''}`}>
                 <NavLink  to="/admin">Movies</NavLink>
               </li>
               <li  className={`movies-list ${location.pathname === '/add' ? 'active' : ''}`}>
                 <NavLink  to="/add">Add Movies</NavLink>
               </li>
           </ul>
        </div>
    )
}
export default Sidebar;