
import React from 'react';
import './sidebar.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { signInWithPopup, signOut } from "firebase/auth";
import { NavLink,useNavigate } from 'react-router-dom';
import { auth, provider } from "../config/config";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Clear user data from localStorage
        localStorage.removeItem("email");
        // Redirect to home or login page
        navigate("/");
       
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  return (
    <div className='sidebar-main' >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Scoremyresume
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
            </NavLink>

            {/* <NavLink exact to="/about" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">About</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Contact Us</CDBSidebarMenuItem>
            </NavLink> */}

       
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
           
             {localStorage.getItem("email") && <CDBSidebarMenuItem className="sidebar-content" onClick={handleLogout} icon="user">Logout</CDBSidebarMenuItem>}
            
       
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;