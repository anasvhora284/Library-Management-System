/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../assets/Images/logoutIcon.png";
import userAvatar from "../assets/Images/userAvatar.png";
import SidebarTabs from "./Sidebar_Tabs";
import CustomButton from "./form_button";
import "./sideBar.css";

const SideBar = ({ activeTab, handleTabClick, dashboardOptions, userData }) => {
     const navigate = useNavigate();
     const handleLogout = () => {
          navigate("/");
     };

     return (
          <div className="SidebarMainDiv">
               <div className="LogoDetailsTabsContainer">
                    <div className="LogoDiv">
                         <img src="" alt="" />
                         <span className="SidebarLogoName">Logo</span>
                    </div>
                    <div className="UserDetailsDiv">
                         <img src={userAvatar} alt="" />
                         <span className="UserNameText">{userData?.name}</span>
                         <span className="Role">{userData?.role}</span>
                    </div>
                    <div className="DashboardPagesDiv">
                         {dashboardOptions.map((option) => (
                              <SidebarTabs
                                   key={option.optionText}
                                   imagePath={option.imagePath}
                                   optionText={option.optionText}
                                   onClick={handleTabClick}
                                   isActive={activeTab === option.optionText}
                              />
                         ))}
                    </div>
               </div>
               <div className="LogoutBtnDIv">
                    <CustomButton
                         IconPath={LogoutIcon}
                         text={"Log out"}
                         bgColor={"secondary"}
                         className={"LogOutButton"}
                         onclick={handleLogout}
                    />
               </div>
          </div>
     );
};
export default SideBar;
