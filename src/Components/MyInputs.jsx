import React, { useState } from "react";
const MyInput = ({ labelText, type, error }) => {
  const [inputsValue, setinputsValue] = useState("");
  const [error1, setError] = useState("");

  const change = (e) => {
    setinputsValue(e.target.value);

    if (labelText === "Email") {
      if (e.target.value.includes("@")) {
        setError("");
      } else {
        setError("");
      }
    }

    if (labelText === "Password") {
      if (inputsValue.length > 6) {
        setError("");
      } else {
        setError("");
      }
    }

    if (labelText === "City") {
      if (inputsValue.length >= 4) {
        setError("");
      } else {
        setError("");
      }
    }

    if (labelText === "Age") {
      if (e.target.value >= 18) {
        setError("");
      } else {
        setError("");
      }
    }
  };

  return (
    <div>
      <label>
        {labelText} <br />{" "}
      </label>
      <input
        id="lastName"
        type={type ? type : "text"}
        value={inputsValue}
        onChange={change}
      />
      {inputsValue === "" ? <p>{error}</p> : null}
      <p>{error1}</p>
    </div>
  );
};
export default MyInput;
