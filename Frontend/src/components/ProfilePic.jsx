/* eslint-disable react/prop-types */
import "./ProfilePic.css";

const ProfilePic = ({ name }) => {
     console.log(name);
     return (
          <div className="ProfilePicComonentDiv">
               <div className="ProfileDetails">
                    <div className="ChooseProfilePic">Add Photo</div>
                    <div className="ProfileUserName">{name}</div>
               </div>
          </div>
     );
};
export default ProfilePic;
