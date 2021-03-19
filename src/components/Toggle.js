import React, {useState} from "react";

function Toggle() {
  const [toggleButton, setToggleButton] = useState("OFF");
  const handleToggle = () => {
    toggleButton === "OFF" ? setToggleButton("ON") : setToggleButton("OFF");
  }
  const color = toggleButton === "ON" ? "red" : "white"; 
  return <button style={{background: color}} onClick={handleToggle}>{toggleButton}</button>
  
}

export default Toggle
