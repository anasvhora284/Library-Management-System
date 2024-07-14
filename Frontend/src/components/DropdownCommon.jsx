/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./dropdownCommon.css";
import ArrowIcon from "../assets/Images/ArrowIcon.svg";
import checkIcon from "../assets/Images/checkIcon.png";

const DropdownCommon = ({
  selectedOption,
  setSelectedOption,
  isDropdownOpen,
  setIsDropdownOpen,
  options,
  title,
}) => {
  const dropdownRef = useRef(null);

  const handleDropdownOpen = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const getSelectedOption = () => {
    const optionMatched = options.find(
      (option) => option.value === selectedOption
    );
    return optionMatched.title;
  };

  return (
    <div
      className={`dropdown-container ${isDropdownOpen ? "expanded" : ""}`}
      ref={dropdownRef}
    >
      <div className="dropdown-btn" onClick={handleDropdownOpen}>
        <div className="dropdown-label">
          <label>
            <span>{title} &nbsp;</span> {getSelectedOption()}
          </label>
        </div>
        <img
          src={ArrowIcon}
          className={`dropdown-arrow ${isDropdownOpen ? "expanded" : ""}`}
        />
      </div>
      <div className={`dropdown-options ${isDropdownOpen ? "expanded" : ""}`}>
        <ul>
          {options.map((option) => (
            <li
              className={`dropdown-option-li ${
                selectedOption === option.value ? "selected" : ""
              }`}
              key={option.value}
              onClick={() => {
                handleSelectOption(option.value);
                setIsDropdownOpen(false);
              }}
            >
              {option.title}
              {selectedOption === option.value ? (
                <img src={checkIcon} height="20px" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownCommon;
