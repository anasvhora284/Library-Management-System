/* eslint-disable react/prop-types */
import "./InputFields.css";

const Field = ({
     iconpath,
     placeholder,
     type,
     value,
     onChange,
     isValid,
     validationMessage,
}) => {
     let idName = placeholder + "Field";
     const containerClass = isValid
          ? "field-container"
          : "field-container invalid";

     return (
          <div className="InputFields">
               <div className={`FieldContainer ${containerClass}`}>
                    <div className="Icon">
                         <img src={iconpath} alt="Icon" />
                    </div>
                    <div className="Field">
                         <input
                              autoComplete="off"
                              type={type}
                              className="Field"
                              id={idName}
                              placeholder={placeholder}
                              value={value}
                              onChange={onChange}
                         />
                    </div>
               </div>
               {!isValid && (
                    <div className="ValidationMessage">
                         {validationMessage
                              .split(
                                   /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/
                              )
                              .map((sentence, index) => (
                                   <p key={index}>{sentence.trim()}</p>
                              ))}
                    </div>
               )}
          </div>
     );
};

export default Field;
