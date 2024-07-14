import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "./form_button";
import "./navbar.css";

const NavBar = () => {
     let navigate = useNavigate();
     const location = useLocation();
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

     const handleLogin = () => {
          navigate("/login");
          closeSidebar();
     };

     const handleSignup = () => {
          navigate("/signup");
          closeSidebar();
     };

     const handleHome = () => {
          navigate("/");
          closeSidebar();
     };

     const handleContact = () => {
          navigate("/contact");
          closeSidebar();
     };

     const handleAbout = () => {
          navigate("/about");
          closeSidebar();
     };

     const handleLocateFacility = () => {
          navigate("/locateFacility");
          closeSidebar();
     };

     const openSidebar = () => {
          setIsSidebarOpen(true);
     };

     const closeSidebar = () => {
          setIsSidebarOpen(false);
     };

     return (
          <nav className={`Navbar ${isSidebarOpen ? "sidebar-open" : ""}`}>
               <div className="nav-logo">Logo</div>
               <div className="nav-item-container">
                    <div
                         className={`nav-toggle ${
                              isSidebarOpen ? "close" : "open"
                         }`}
                         onClick={isSidebarOpen ? closeSidebar : openSidebar}
                    >
                         {isSidebarOpen ? (
                              <button
                                   className="close-button"
                                   onClick={closeSidebar}
                              >
                                   &times;
                              </button>
                         ) : (
                              <button
                                   className="open-button"
                                   onClick={openSidebar}
                              >
                                   ☰
                              </button>
                         )}
                    </div>
                    <ul className={`nav-items ${isSidebarOpen ? "open" : ""}`}>
                         <li id="nav-item-1">
                              <a onClick={handleHome}>Home</a>
                         </li>
                         <li id="nav-item-2">
                              <a onClick={handleLocateFacility}>
                                   Locate Facility
                              </a>
                         </li>
                         <li id="nav-item-3">
                              <a onClick={handleContact}>Contact</a>
                         </li>
                         <li id="nav-item-4">
                              <a onClick={handleAbout}>About</a>
                         </li>
                         <li className="nav-item-5">
                              <CustomButton
                                   className={"navBarLoginButton"}
                                   text={
                                        location.pathname == "/login"
                                             ? "Sign up"
                                             : "Login"
                                   }
                                   bgColor={"secondary"}
                                   onclick={
                                        location.pathname == "/login"
                                             ? handleSignup
                                             : handleLogin
                                   }
                              />
                         </li>
                    </ul>
               </div>
          </nav>
     );
};

export default NavBar;
