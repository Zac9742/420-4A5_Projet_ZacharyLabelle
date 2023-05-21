import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./NouveauEtudiant.css";


function NouveauEtudiant(props) {

  const { error, sendRequest, clearError } = useHttpClient();

  const [numAdmission, setNumAdmission] = useState("")
  const [nom, setNom] = useState("");
  const [courriel, setCourriel] = useState("");
  const [profil, setProfil] = useState("");

  useEffect(() => {
    const affecterProfil = async () => {
      setProfil("Réseau et sécurité")
    };
    affecterProfil();
  })

  const ajouterNouveauEtudiantHandler  = async event =>  {
    event.preventDefault();
    if (numAdmission === "" || nom === "" || courriel === "" || profil === "") {
      alert("Les champs ne peuvent pas être vides.");
      return;
    }

    try {
      const reponseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/etudiants",
        "POST",
        JSON.stringify({
          numAdmission: numAdmission,
          nom: nom,
          courriel: courriel,
          profil: profil,
          stage: null
        }),
        {
          "Content-Type": "application/json",
        }
      );

      console.log(reponseData);
      alert("Etudiant ajouté !");
      
      const nouveauEtudiant = {
        numAdmission: numAdmission,
        nom: nom,
        courriel: courriel,
        profil: profil,
        stage: null
      };

      props.ajouterEtudiant(nouveauEtudiant);
      setNumAdmission("");
      setNom("");
      setCourriel("");
     // history.push("/");
    } catch (err) {
      console.log(err);
      alert("Erreur lors de l'ajout de l'étudiant");
    }
  };

  function numAdmissionHandler(event) {
    setNumAdmission(event.target.value);
  }
  function nomHandler(event) {
    setNom(event.target.value);
  }
  function courrielHandler(event) {
    setCourriel(event.target.value);
  }

  return (
    <form onSubmit={ajouterNouveauEtudiantHandler} className="formulaire">
      <h2>Ajout d'un etudiant</h2>
      <label for="numAdmission">Numéro d'admission : <input
        type="text"
        id="numAdmission"
        value={numAdmission}
        onChange={numAdmissionHandler}
        placeholder="Numéro d'admission"
      ></input></label>
      <label for="nom">Nom : <input
        type="text"
        id="nom"
        value={nom}
        onChange={nomHandler}
        placeholder="Nom"
      ></input></label>
      <label for="courriel">Courriel : <input
        type="text"
        id="courriel"
        value={courriel}
        onChange={courrielHandler}
        placeholder="Courriel"
      ></input></label>
      
      <label>Sélectionnez un profil<select
        value={profil}
        onChange={(event) => {
          setProfil(event.target.value);
        }}
        >
        <option>Réseau et sécurité</option>
        <option>Développement d'applications</option>
        </select></label>
      
      <button type="submit">Ajouter un étudiant</button>
    </form>
  );
}

export default NouveauEtudiant;
