import React from "react";
import Stage from "./Stage";
import "./ListeStages.css"
function ListeStages(props) {
  
  return (
    
    <ul className="stages-list">
      {props.items.map((element, index) => (
        <Stage key={index} element={element} />
      ))}
    </ul>
  );
}
export default ListeStages;
