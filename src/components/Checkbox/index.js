import React from "react";
import "./style.css"

function Checkbox({onClick, checked}){
  return (
    <input
      checked={checked}
      type="checkbox"
      onChange={onClick}
    >
    </input>
  )
}

export default Checkbox;