import React from "react";
import { useState } from "react";
import Activity from "../components/Activity";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";
import "./style.css"

function TodoContainer(){
  const [activities, setActivities] = useState([]);

  return (
    <div id="todoContainer">
      <div>
        <div className="centered">
          <h1 className="title">TO DO</h1>
        </div>
        <ActivityForm activities={activities} setActivities={setActivities}/>
      </div>
      <ActivityList>
        {activities.map((activity) => {
          return(
            <Activity 
              title={activity.title} 
              doneState={activity.isDone} 
              key={activity.title}
            />
          )
        })}
      </ActivityList>


    </div>
  )
}

export default TodoContainer;