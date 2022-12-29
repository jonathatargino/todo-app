import React from "react";
import "./style.css"

function ClearButton({activities, setActivities}){
  return (
    <button
      className="clearButton"
      type="button"
      onClick={() => setActivities(activities.filter(activity => !activity.isDone))}
    >
      Limpar Concluidas
    </button>
  )
}

export default ClearButton