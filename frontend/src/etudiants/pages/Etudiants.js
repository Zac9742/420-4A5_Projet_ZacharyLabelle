import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import ListeEtudiants from "../components/ListeEtudiants";
import NouveauEtudiant from "../components/NouveauEtudiant";

const Etudiants = () => {
  const {error, sendRequest, clearError } = useHttpClient();
  const [etudiants, setEtudiants] = useState();

  function ajouterEtudiant(nouveauEtudiant) {
    setEtudiants(etudiants.concat(nouveauEtudiant));
  }

  useEffect(() => {
    const recupererEtudiants = async () => {
      try {
        const reponseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + "/etudiants/etudiants");

        setEtudiants(reponseData.etudiants);
      } catch (err) {
        
      }
    };
    recupererEtudiants();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <NouveauEtudiant ajouterEtudiant={ajouterEtudiant} />
      {etudiants && <ListeEtudiants items={etudiants} />};
    </React.Fragment>
  );
};

export default Etudiants;
