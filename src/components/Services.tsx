import React, { useState, useEffect } from "react";
import photo1 from "../assets/1.jpg";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
const Services = () => {
  const solutions = [
    {
      id: 1,

      description:
        "Accompagnement aux projets de la structure SI, Supply Chain, Production et commerciale",
    },
    {
      id: 2,

      description:
        "Mise à niveau des formations & rédaction de procédures et instructions",
    },
    {
      id: 3,

      description: "Mise en place des processus, procédures et instructions",
    },
    {
      id: 4,

      description:
        "Veille à l’application des procédures établies, audit et propositions d’actions amélioratrices",
    },
    {
      id: 5,

      description: "Mise en place de la gestion avancée des entrepôts (WMS)",
    },
    {
      id: 6,

      description: "Mise en place de la gestion de l'assurance Qualité",
    },
    {
      id: 7,

      description:
        "Diagnostic, Audit fonctionnel des structures exploitation, comptabilité finance, commerciale et logistique",
    },
    {
      id: 8,

      description:
        "Préparation de la plateforme pour l’intégration d’un système d’information (prototypage des données, des flux), préparation des spécifications, des variantes",
    },
    {
      id: 9,

      description:
        "Assistance aux grands projets de développement (planification, gestion avancée des stocks, gestion commerciale, gestion des coûts …)",
    },
    {
      id: 10,

      description:
        "Etablissement et mise en place d’états de gestion et tableaux de bords pour analyse des taches et réalisations (mesures de performances, écarts prévisionnels/ réalisés, évolution ....)",
    },
    {
      id: 11,

      description:
        "Pilotage des projets de mise en place de systèmes d'information QAD",
    },
  ];
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = (key: number) => {
    console.log(key);
    setIsShowMore(!isShowMore);
  };
  return (
    <div
      className="md:px-14 px-4 py-12 max-w-screen-2xl mx-auto bg-bgGreen"
      id="vision"
    >
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-semibold mb-4 text-white md:w-full leading-snug ">
          Nos services
        </h1>
      </div>
      <div className="my-8 md:my-8 py-4 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div className="flex flex-wrap justify-center items-center">
          <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="card px-4 py-8 text-center md:w-[400px] mx-auto md:h-100 rounded-md shadow   flex h-full  justify-center items-center "
              >
                <div className="mb-4 h-50  mx-auto">
                  <p className="text-sm text-bgWhite text-overflow:ellipsis">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
