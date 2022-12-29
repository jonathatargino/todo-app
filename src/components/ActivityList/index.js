import React from "react";

import Activity from "../Activity";
import "./style.css"

function ActivityList({activities, setActivities, selectedOption}){
  let selectedActivities = [];

  if (selectedOption === "all"){
    selectedActivities = [...activities]
  }

  if (selectedOption === "active"){
    selectedActivities = activities.filter(activity => !activity.isDone)
  }

  if (selectedOption === "completed"){
    selectedActivities = activities.filter(activity => activity.isDone)
  }

  return (
    <div id="activityList">
      {selectedActivities.map((activity) => {
          return(
            <Activity 
              title={activity.title} 
              doneState={activity.isDone} 
              activities={activities}
              setActivities={setActivities}
              key={activity.title}
            />
          )
        })}
    </div>
  )
}

export default ActivityList