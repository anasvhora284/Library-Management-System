/* eslint-disable no-undef */
import "./form_button.css";

/* eslint-disable react/prop-types */
const CustomButton = ({ className, text, onclick, bgColor, IconPath }) => {
  let bgColorClass;
  if (bgColor === "primary") {
    bgColorClass = "PrimaryBgColor";
  } else if (bgColor === "secondary") {
    bgColorClass = "SecondaryBgColor";
  }

  return (
    <div className="ButtonDiv">
      <button
        className={`CustomBtn ${bgColorClass} ${className}`}
        onClick={onclick}
      >
        <div className="MobileImageDiv">
          <img src={IconPath} alt="ImageIcon" />
        </div>
        <div className="CustomButtonTextDiv">{text}</div>
      </button>
    </div>
  );
};

export default CustomButton;
