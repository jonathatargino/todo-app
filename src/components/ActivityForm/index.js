import React from "react";
import "./style.css"

function ActivityForm() {
  return (
    <form id="activityForm">
      <input className="todoInput" placeholder="Adicione uma nova atividade..." autoComplete="off"/>
    </form>
  )
}

export default ActivityForm