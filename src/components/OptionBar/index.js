import React from "react";

import Option from "../Option";
import "./style.css"

function OptionBar({selectedOption, setSelectedOption}){

  return(
    <div className="optionBar">
      <ul className="options">
        <Option 
          optionName="all" 
          selectedOption={selectedOption} 
          setSelectedOption={setSelectedOption}
        >
          Todas
        </Option>
        <Option 
          optionName="active" 
          selectedOption={selectedOption} 
          setSelectedOption={setSelectedOption}
        >
          Pendentes
        </Option>
        <Option 
          optionName="completed" 
          selectedOption={selectedOption} 
          setSelectedOption={setSelectedOption}
        >
          Concluidas
        </Option>
      </ul>
    </div>
  )
}

export default OptionBar