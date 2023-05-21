import React from "react";
import Card from "../../shared/Card";
import "./Stage.css";
function Stage({element}) {
  return (
    <li className="stage-item">
      <Card className="stage-item__content">
        <div className="stage-item__info">
          <h2>Nom contact : {element.nomContact}</h2>
          <h3>Courriel contact : {element.courrielContact}</h3>
          <h3>Nom de l'entreprise : {element.nomEntreprise}</h3>
          <h3>Adresse de l'entreprise : {element.adresseEntreprise}</h3>
          <h3>Type de stage : {element.typeStage}</h3>
          <h3>Nombre de postes disponibles : {element.nbPostes}</h3>
          <h3>Description du stage : {element.description}</h3>
        </div>
      </Card>
    </li>
  );
}

export default Stage;
