/* eslint-disable react/prop-types */
import "./CustomInfoCard.css";

const CustomInfoCard = ({ HeadingText, ImagePath, texts }) => {
  return (
    <div className="commonCardContainer">
      <div className="CustomCardHeadings">
        <span>{HeadingText}</span>
      </div>
      <div className="CustomCard">
        <img src={ImagePath} alt="" />
        <span className="CustomCradText">{texts}</span>
      </div>
    </div>
  );
};

export default CustomInfoCard;
