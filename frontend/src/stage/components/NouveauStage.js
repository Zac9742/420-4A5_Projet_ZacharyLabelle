import React, { useState } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./NouveauStage.css";


function NouveauStage(props) {

  const { error, sendRequest, clearError } = useHttpClient();

  const [nomContact, setNomContact] = useState("")
  const [courrielContact, setCourrielContact] = useState("");
  const [telephoneContact, setTelephoneContact] = useState("");
  const [nomEntreprise, setNomEntreprise] = useState("");
  const [adresseEntreprise, setAdresseEntreprise] = useState("");
  const [typeStage, setTypeStage] = useState("");
  const [nbPostes, setNbPostes] = useState("");
  const [description, setDescription] = useState("");
  const [remuneration, setRemuneration] = useState("");

  const ajouterNouveauStageHandler  = async event =>  {
    event.preventDefault();

    if (nomContact === "" || courrielContact === "" || telephoneContact === "" || nomEntreprise === "" || adresseEntreprise === "" || typeStage === "" || nbPostes === "" || description === "" || remuneration === "") {
      alert("Les champs ne peuvent pas être vides.");
      return;
    }

    try {
      const reponseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/stages",
        "POST",
        JSON.stringify({
          nomContact: nomContact,
          courrielContact: courrielContact,
          telephoneContact: telephoneContact,
          nomEntreprise: nomEntreprise,
          adresseEntreprise: adresseEntreprise,
          typeStage: typeStage,
          nbPostes: nbPostes,
          description: description,
          remuneration: remuneration
        }),
        {
          "Content-Type": "application/json",
        }
      );

      console.log(reponseData);
      alert("Stage ajouté !");
      
      const nouveauStage = {
        nomContact: nomContact,
        courrielContact: courrielContact,
        telephoneContact: telephoneContact,
        nomEntreprise: nomEntreprise,
        adresseEntreprise: adresseEntreprise,
        typeStage: typeStage,
        nbPostes: nbPostes,
        description: description,
        remuneration: remuneration
      };
      props.ajouterStage(nouveauStage);
      setNomContact("");
      setCourrielContact("");
      setTelephoneContact("");
      setNomEntreprise("");
      setAdresseEntreprise("");
      setTypeStage("");
      setNbPostes("");
      setDescription("");
      setRemuneration("");
     // history.push("/");
    } catch (err) {
      console.log(err);
      alert("Erreur lors de l'ajout, veuillez communiquer avec Sylvain Labranche : sylvain.labranche@cmontmorency.qc.ca");
    }
  };


  function nomContactHandler(event) {
    setNomContact(event.target.value);
  }
  function courrielContactHandler(event) {
    setCourrielContact(event.target.value);
  }
  function telephoneContactHandler(event) {
    setTelephoneContact(event.target.value);
  }
  function nomEntrepriseHandler(event) {
    setNomEntreprise(event.target.value);
  }
  function adresseEntrepriseHandler(event) {
    setAdresseEntreprise(event.target.value);
  }
  function nbPostesHandler(event) {
    setNbPostes(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function remunerationHandler(event) {
    setRemuneration(event.target.value);
  }

  return (
    <form onSubmit={ajouterNouveauStageHandler} className="formulaire">
      <h2>Ajout d'un stage</h2>
      <label for="nomContact">Nom du contact : <input
        type="text"
        id="nomContact"
        value={nomContact}
        onChange={nomContactHandler}
        placeholder="Nom du contact"
      ></input></label>
      <label for="courrielContact">Courriel du contact : <input
        type="text"
        id="courrielContact"
        value={courrielContact}
        onChange={courrielContactHandler}
        placeholder="Courriel du contact"
      ></input></label>
      <label for="telephoneContact">Téléphone du contact : <input
        type="text"
        id="telephoneContact"
        value={telephoneContact}
        onChange={telephoneContactHandler}
        placeholder="Téléphone du contact"
      ></input></label>
      <label for="nomEntreprise">Nom de l'entreprise : <input
        type="text"
        id="nomEntreprise"
        value={nomEntreprise}
        onChange={nomEntrepriseHandler}
        placeholder="Nom de l'entreprise"
      ></input></label>
      <label for="adresseEntreprise">Adresse de l'entreprise : <input
        type="text"
        id="adresseEntreprise"
        value={adresseEntreprise}
        onChange={adresseEntrepriseHandler}
        placeholder="Adresse de l'entreprise"
      ></input></label>
      
      <label>Sélectionnez un type de stage<select
        value={typeStage}
        onChange={(event) => {
          setTypeStage(event.target.value);
        }}
        >
        <option>Réseau et sécurité</option>
        <option>Développement d'applications</option>
        </select></label>
      <label for="nbPostes">Nombre de postes : <input
        type="text"
        id="nbPostes"
        value={nbPostes}
        onChange={nbPostesHandler}
        placeholder="Nombre de postes"
      ></input></label>
      <label for="description">Description : <input
        type="text"
        id="description"
        value={description}
        onChange={descriptionHandler}
        placeholder="Description"
      ></input></label>
      <label for="remuneration">Rémunération : <input
        type="text"
        id="remuneration"
        value={remuneration}
        onChange={remunerationHandler}
        placeholder="Rémunération"
      ></input></label>
      <button type="submit">Ajouter un stage</button>
    </form>
  );
}

export default NouveauStage;
