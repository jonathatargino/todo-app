import React from "react";
import "./style.css"

function Checkbox({onClick}){
  return (
    <input
      type="checkbox"
      onClick={onClick}
    >
    </input>
  )
}

export default Checkbox;