import React from "react";
import { useState } from "react";
import ActivityForm from "../ActivityForm";
import ActivityList from "../ActivityList";
import ActivityCount from "../ActivityCount";
import ClearButton from "../ClearButton"
import "./style.css"
import OptionBar from "../OptionBar";

function TodoContainer(){
  const [activities, setActivities] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all")

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