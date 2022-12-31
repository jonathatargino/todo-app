import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ActivityForm from "../ActivityForm";
import ActivityList from "../ActivityList";
import ActivityCount from "../ActivityCount";
import ClearButton from "../ClearButton"
import "./style.css"
import OptionBar from "../OptionBar";

function TodoContainer(){
  let initialActivitiesArray = [];

  if(localStorage.getItem('activities')){
    initialActivitiesArray = JSON.parse(localStorage.getItem('activities'));
  }

  const [activities, setActivities] = useState(initialActivitiesArray);
  const [selectedOption, setSelectedOption] = useState("all")

  const renderNumber = useRef(0)

  useEffect(() => {
    renderNumber.current++
    if (renderNumber.current > 2){
      localStorage.setItem('activities', JSON.stringify(activities))
    }
  },[activities])

  return (
    <div id="todoContainer">
      <div>
        <div className="centered">
          <h1 className="title">TO DO</h1>
        </div>
        <ActivityForm activities={activities} setActivities={setActivities}/>
      </div>
      <div className="container">
        <ActivityList 
          activities={activities} 
          setActivities={setActivities} 
          selectedOption={selectedOption}
        />

        <div className="flex">
          <ActivityCount activityList={activities}/>
          <OptionBar 
            selectedOption={selectedOption} 
            setSelectedOption={setSelectedOption}
          />
          <ClearButton activities={activities} setActivities={setActivities}/>
        </div>
      </div>
    </div>
  )
}

export default TodoContainer;