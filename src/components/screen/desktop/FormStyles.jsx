import React, { useState } from "react";
import "./FormStyles.css";

const InputField = ({ label, type, placeholder }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={`input-field ${focused || value ? "focused" : ""}`}>
      <label className="floating-label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="text-field-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-row">
        <InputField label="First Name" type="text" placeholder="Enter first name" />
        <InputField label="Last Name" type="text" placeholder="Enter last name" />
      </div>
      <div className="form-row">
        <InputField label="Email" type="email" placeholder="Enter email" />
        <InputField label="Password" type="password" placeholder="Enter password" />
      </div>
      <div className="form-row">
        <InputField label="Phone" type="text" placeholder="Enter phone number" />
        <InputField label="Address" type="text" placeholder="Enter address" />
      </div>
    </div>
  );
};

export default Form;
