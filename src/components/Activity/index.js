import React, { useState } from "react";
import Checkbox from "../Checkbox";
import "./style.css"
import ActivityTitle from "../ActivityTitle";

function Activity({title, doneState, setActivities, activities}){
  const [isDone, setIsDone] = useState(doneState);
  return (
    <div className="todoActivity">
      <Checkbox 
        onClick={
          () => {
            isDone? setIsDone(false) : setIsDone(true)
            setActivities(activities.map(activity => {
              if (activity.title === title){
                activity.isDone? activity.isDone = false : activity.isDone = true;
              }
              
              return activity;
            }))
          }
        }
        checked={isDone}
      />
      <ActivityTitle title={title} isDone={isDone}/>
    </div>
  )
}

export default Activity;