import React, { useState } from "react";
import "./style.css"

function ActivityForm({activities, setActivities}) {
  const [newActivity, setNewActivity] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    setActivities([
      ...activities,
      {
        title: newActivity,
        isDone: false,
      }
    ])
    event.target.reset();
  }

  return (
    <form 
      id="activityForm"
      onSubmit={(event) => handleSubmit(event)}
    >
      <input 
        className="todoInput" 
        placeholder="Adicione uma nova atividade..." 
        autoComplete="off"
        onChange={(event) => setNewActivity(event.target.value)}
      />

    </form>
  )
}

export default ActivityForm