import React from "react";
let image = "https://cdn.pixabay.com/photo/2016/11/19/13/08/business-1839191_960_720.jpg";
let maxEtudiants = 30;
const  donnees = {
    cours : [
        {
          id: "420ZA4",
          titre: "Outils et profession",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2021-09-01",
          dateFin: "2021-12-31",
        },
        {
          id: "420ZC5",
          titre: "Système d'exploitation Windows",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2021-09-01",
          dateFin: "2021-12-31",
        },
        {
          id: "420ZE5",
          titre: "Environnements virtuels et réseau local",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2022-01-01",
          dateFin: "2021-06-06",
        },
        {
          id: "420ZF5",
          titre: "Programmation structurée",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2022-01-01",
          dateFin: "2021-06-06",
        },
        {
          id: "420ZC6",
          titre: "Algorithmie et programmation",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2021-09-01",
          dateFin: "2021-12-31",
        },
        {
          id: "420ZD5",
          titre: "Programmation orientée objet",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2022-01-01",
          dateFin: "2021-06-06",
        },
        {
          id: "420ZH5",
          titre: "Bases de données",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2022-09-01",
          dateFin: "2022-12-31",
        },
        {
          id: "420ZG4",
          titre: "Système d'exploitation Linux",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2022-01-01",
          dateFin: "2022-06-06",
        },
        {
          id: "420ZJ4",
          titre: "Sécurité et éthique",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2022-09-01",
          dateFin: "2022-12-31",
        },
        {
          id: "4203E5",
          titre: "Interface Web",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2022-09-01",
          dateFin: "2022-12-31",
        },
        {
          id: "4203D4",
          titre: "Interface utilisateur",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2022-09-01",
          dateFin: "2022-12-31",
        },
        {
          id: "4204B5",
          titre: "Objets connectés",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2023-01-01",
          dateFin: "2023-06-06",
        },
        {
          id: "4204E6",
          titre: "Analyse et conception de modèles",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2023-01-01",
          dateFin: "2023-06-06",
        },
        {
          id: "4204F5",
          titre: "Environnement graphique client/serveur",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2023-01-01",
          dateFin: "2023-06-06",
        },
        {
          id: "4203C6",
          titre: "Structures de données",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2022-09-01",
          dateFin: "2022-12-31",
        },
        {
          id: "4204A5",
          titre: "Web et bases de données",
          discipline: "informatique",
          maxEtudiants: maxEtudiants,
          dateDebut: "2023-01-01",
          dateFin: "2023-06-06",
        },
      ],
      professeurs : 
        [
            {
              embauche: "2023-01-01",
              nom: "Labranche",
              prenom: "Sylvain",
              image: image,
              cours: ["Web et bases de données"],
            },
            {
              embauche: "2022-09-01",
              nom: "Bergeron",
              prenom: "Mathieu",
              image: image,
              cours: ["Structures de données", "Environnement graphique client/serveur"],
            },
            {
              embauche: "2023-01-01",
              nom: "Bouchard",
              prenom: "Louis",
              image: image,
              cours: ["Analyse et conception de modèles"],
            },
            {
              embauche: "2022-09-01",
              nom: "Deschênes",
              prenom: "Simon",
              image: image,
              cours: ["Interface utilisateur", "Objets connectés"],
            },
            {
              embauche: "2022-09-01",
              nom: "Desmangles",
              prenom: "Nathalie",
              image: image,
              cours: ["Interface Web"],
            },
            {
              embauche: "2022-01-01",
              nom: "Haouari",
              prenom: "Dorsaf",
              image: image,
              cours: ["Système d'exploitation Linux", "Sécurité et éthique"],
            },
            {
              embauche: "2022-09-01",
              nom: "Fostiné",
              prenom: "Kerlyne",
              image: image,
              cours: ["Bases de données"],
            },
            {
              embauche: "2021-09-01",
              nom: "Ait-Ammar",
              prenom: "Farida",
              image: image,
              cours: ["Algorithmie et programmation", "Programmation orientée objet"],
            },
            {
              embauche: "2022-01-01",
              nom: "Lecomte",
              prenom: "Claude",
              image: image,
              cours: ["Programmation structurée"],
            },
            {
              embauche: "2022-01-01",
              nom: "Mlouki",
              prenom: "Ons",
              image: image,
              cours: ["Environnements virtuels et réseau local"],
            },
            {
              embauche: "2021-09-01",
              nom: "Boughanmi",
              prenom: "Ferdaws",
              image: image,
              cours: ["Système d'exploitation Windows"],
            },
            {
              embauche: "2021-09-01",
              nom: "Bucci",
              prenom: "François",
              image: image,
              cours: ["Outils et profession"],
            }
          ],
          maxEtudiants : 30,
          image : "https://cdn.pixabay.com/photo/2016/11/19/13/08/business-1839191_960_720.jpg"
        }   


       export default donnees;