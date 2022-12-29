import React from "react";
import "./style.css"

function Option({children, optionName, selectedOption, setSelectedOption}){
  return(
    <button
      className={`option ${selectedOption === optionName ? "selected" : ""}`}
      type="button"
      onClick={() => setSelectedOption(optionName)}
    >
      {children}
    </button>
  )
}

export default Option