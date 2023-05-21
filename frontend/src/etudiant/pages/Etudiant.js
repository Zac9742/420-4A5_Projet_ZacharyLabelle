import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';

import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import Card from '../../shared/components/UIElements/Card';

const Etudiant = () => {
  const {error, sendRequest, clearError } = useHttpClient();
  const [etudiant, setEtudiant] = useState();
  const [ListeStages, setListeStages] = useState();
  const [stageSelectionne, setstageSelectionne] = useState();
  const numAdmission = useParams().numAdmission;
  const history = useHistory();


  useEffect(() => {
    const recupererEtudiant = async () => {
      try {
        const responseData1 = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/etudiants/${numAdmission}`
        );
        setEtudiant(responseData1.etudiant);
        console.log(responseData1.etudiant)
        const responseData2 = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/stages/stages`
        );
        setListeStages(responseData2.stages);
        console.log(responseData2.stages)

        if (responseData2.stages.length > 0) {
          setstageSelectionne(responseData2.stages[0].nomEntreprise);
        }
      } catch (err) {}
    };
    recupererEtudiant();
  }, [sendRequest, numAdmission]);

  const etudiantUpdateSubmitHandler = async event => {
    event.preventDefault();
    try {
      console.log(stageSelectionne)
      const monStage = ListeStages.find(stage => stage.nomEntreprise === stageSelectionne);
      console.log(monStage)
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/etudiants/${numAdmission}`,
        'PATCH',
        JSON.stringify({
          nom: etudiant.nom,
          courriel: etudiant.courriel,
          profil: etudiant.profil,
          stage: monStage
        }),
        {
          'Content-Type': 'application/json'
        }
      );
      alert("Affectation réussie!");
      history.push('/etudiants');
    } catch (err) {
      alert("Erreur lors de l'affectation");
    }

  };



  if ((!ListeStages || !etudiant) && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form onSubmit={etudiantUpdateSubmitHandler} className="formulaire">
        <h2>Affectation d'un stage pour l'étudiant #{etudiant.numAdmission}.</h2>
        <label>Sélectionnez un stage<select
          value={stageSelectionne}
          onChange={(event) => {
            setstageSelectionne(event.target.value);
          }}
          >
          {ListeStages.map((stage, index) => 
          <option key={index}>{stage.nomEntreprise}</option>
          )}
          </select></label>
          <button type="submit">Affecter le stage à l'étudiant</button>
      </form>
    </React.Fragment>
  );
};

export default Etudiant;
