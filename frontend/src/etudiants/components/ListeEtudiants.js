import React from "react";
import Etudiant from "./Etudiant";
import "./ListeEtudiants.css"
function ListeEtudiants(props) {
  
  return (
    
    <ul className="etudiants-list">
      {props.items.map((element, index) => (
        <Etudiant key={index} element={element} />
      ))}
    </ul>
  );
}
export default ListeEtudiants;
