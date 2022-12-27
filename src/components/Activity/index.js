import React, { useState } from "react";
import Checkbox from "../Checkbox";
import "./style.css"
import ActivityTitle from "../ActivityTitle";

function Activity({title, doneState}){
  const [isDone, setIsDone] = useState(doneState);
  return (
    <div className="todoActivity">
      <Checkbox onClick={() => isDone? setIsDone(false) : setIsDone(true)}/>
      <ActivityTitle title={title} isDone={isDone}/>
    </div>
  )
}

export default Activity;