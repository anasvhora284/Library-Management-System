/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import "./Sidebar_Tabs.css";

const SidebarTabs = ({
  className,
  imagePath,
  optionText,
  isActive,
  onClick,
}) => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    onClick(optionText);
  };

  return (
    <div
      className={`sideBarOption ${isActive ? "active" : ""} ${className}`}
      onClick={() => onClick(optionText)}
    >
      <div className="OptionimageTextDiv">
        <a
          className=""
          href={`/UserDashboard/${optionText}`}
          onClick={handleLinkClick}
        >
          <img src={imagePath} alt={optionText} />
          <span className="optionText">{optionText}</span>
        </a>
      </div>
    </div>
  );
};

export default SidebarTabs;
