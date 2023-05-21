import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import ListeStages from "../components/ListeStages";
import NouveauStage from "../components/NouveauStage";

const Stages = () => {
  const {error, sendRequest, clearError } = useHttpClient();
  const [stages, setStages] = useState();

  function ajouterStage(nouveauStage) {
    setStages(stages.concat(nouveauStage));
  }

  useEffect(() => {
    const recupererStages = async () => {
      try {
        const reponseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + "/stages/stages");

        setStages(reponseData.stages);
      } catch (err) {
        
      }
    };
    recupererStages();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <NouveauStage ajouterStage={ajouterStage} />
      {stages && <ListeStages items={stages} />};
    </React.Fragment>
  );
};

export default Stages;
