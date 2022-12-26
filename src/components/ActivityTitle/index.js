import React from "react";
import "./style.css"

function ActivityTitle({title, isDone}){
  return (
    <span className={`todoActivityTitle ${isDone? "doneActivity": ""}`}>{title}</span>
  )
}

export default ActivityTitle