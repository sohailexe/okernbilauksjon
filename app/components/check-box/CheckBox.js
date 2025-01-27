import React from "react";
import "./checkbox-style.css";

export const CheckBox = ({ name, isChecked, onChange }) => {
    return (
        <div className="checkbox-wrapper-19">
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={isChecked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label htmlFor={name} className="check-box"></label>
        </div>
    );
};
