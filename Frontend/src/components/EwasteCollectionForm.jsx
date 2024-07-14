/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ewasteCollectionForm.css";
import CustomButton from "./form_button";

const EwasteCollectionForm = ({ handleFormSubmit }) => {
     const [items, setItems] = useState("");
     const [quantities, setQuantities] = useState("");
     const [pickupDate, setPickupDate] = useState("");

     const handleSubmit = (e) => {
          e.preventDefault();
          handleFormSubmit({ items, quantities, pickupDate });
          setItems("");
          setQuantities("");
          setPickupDate("");
     };

     return (
          <form className="EwasteCollectionForm" onSubmit={handleSubmit}>
               <div className="inlineGroup">
                    <div className="formGroup">
                         <label htmlFor="items">Items:</label>
                         <input
                              type="text"
                              id="items"
                              placeholder="Name of items"
                              value={items}
                              onChange={(e) => setItems(e.target.value)}
                              required
                         />
                    </div>
                    <div className="formGroup">
                         <label htmlFor="quantities">Quantities:</label>
                         <input
                              type="number"
                              id="quantities"
                              placeholder="Enter Number"
                              value={quantities}
                              onChange={(e) => setQuantities(e.target.value)}
                              required
                         />
                    </div>
               </div>
               <div className="formGroup">
                    <label htmlFor="pickupDate">Preferred Pickup Date:</label>
                    <input
                         type="date"
                         id="pickupDate"
                         value={pickupDate}
                         onChange={(e) => setPickupDate(e.target.value)}
                         required
                    />
               </div>
               <CustomButton
                    text={"Submit"}
                    bgColor={"primary"}
                    className={"DiscardChanges"}
                    onclick={null}
               />
          </form>
     );
};

export default EwasteCollectionForm;
