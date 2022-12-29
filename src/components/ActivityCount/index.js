import React from "react";
import "./style.css"

function ActivityCount({activityList}){
  return (
    <span className="activityCount">
      {activityList.filter(activity => !activity.isDone).length} atividades restantes
    </span>
  )
}

export default ActivityCount