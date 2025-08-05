import React, { useState } from "react";
import "./list.css";

const ListItem = ({ item }) => {
  const [checked, setChecked] = useState(false);
  // State to track whether description is visible
  const [showDesc, setShowDesc] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
    console.log(`Item ${!checked ? "checked" : "unchecked"}:`, item.name);
  };

  const toggleDescription = () => {
    setShowDesc((prevShowDesc) => !prevShowDesc);
  };

  return (
    <div className="list-item">
      <div className="list-item-header">
        
        <div className="list-item-info">
          <label htmlFor={item.name} className={checked ? "strikethrough" : ""}>
            {item.name}
          </label>
        </div>

        <div className="list-control">
          <button onClick={toggleDescription} className="desc-button">
            {showDesc ? "🔼" : "🔽"}
          </button>
          <input
            type="checkbox"
            id={item.name}
            checked={checked}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>

      {/* Conditionally render the description */}
      {showDesc && (
        <div className="item-description">
          <p>{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default ListItem;
