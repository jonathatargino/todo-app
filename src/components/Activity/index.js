import React from "react";
import Checkbox from "../Checkbox";
import "./style.css"

function Activity({title}){
  return (
    <div className="todoActivity">
      <Checkbox onClick={() => document.getElementById("todoActivityTitle").classList.toggle("doneActivity")}/>
      <span id="todoActivityTitle">{title}</span>
    </div>
  )
}

export default Activity;