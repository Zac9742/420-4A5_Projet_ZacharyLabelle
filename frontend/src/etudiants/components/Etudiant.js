import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import { Link } from "react-router-dom";
import Card from "../../shared/Card";
import "./Etudiant.css";
function Etudiant({element}) {
  const {error, sendRequest, clearError } = useHttpClient();
  const [stage, setStage] = useState();

  useEffect(() => {
    const recupererStage = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/stages/${element.stage}`
        );
        setStage(responseData.stage);
        console.log(responseData.stage)
      } catch (err) {}
    };
    recupererStage();
  }, [sendRequest, element.stage]);

  return (
    <li className="etudiant-item">
      <Link to={`/${element.id}/etudiants`}>
      <Card className="etudiant-item__content">
        <div className="etudiant-item__info">
          <h2>Numéro d'admission : {element.numAdmission}</h2>
          <h3>Nom : {element.nom}</h3>
          <h3>Courriel : {element.courriel}</h3>
          <h3>Profil : {element.profil}</h3>
          <h3>Stage : {stage && stage.nomEntreprise}</h3>
        </div>
      </Card>
      </Link>
    </li>
  );
}

export default Etudiant;
