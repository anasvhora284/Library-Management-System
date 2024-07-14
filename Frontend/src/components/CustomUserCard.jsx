/* eslint-disable react/prop-types */
import "./CustomUserCard.css";

const CustomUserCard = ({
  UserProfilePic,
  name,
  weight,
  username,
  dateTime,
}) => {
  return (
    <div className="UserDeatilsDiv">
      <div className="imagecontainer">
        <img src={UserProfilePic} alt="UserProfilePic" />
        <span>{name}</span>
      </div>
      <div className="details">
        <div className="details_lables">
          <label>Username:- </label>
          <span>{username}</span>
        </div>

        <div className="details_lables">
          <label>Weight:- </label>
          <span>{weight}</span>
        </div>

        <div className="details_lables">
          <label>Date & time:- </label>
          <span>{dateTime}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomUserCard;
