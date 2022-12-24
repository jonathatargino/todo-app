import React from "react";
import "./style.css"

function Checkbox({onClick}){
  return (
    <input
      className="todoCheckbox"
      type="checkbox"
      onClick={onClick}
    >
    </input>
  )
}

export default Checkbox;