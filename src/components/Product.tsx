import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
const Product = () => {
  const solutions = [
    {
      id: 1,
      name: "QAD ERP",
      description:
        "la solution ERP QAD est un outil de gestion intégré de toute l’activité de l’entreprise, éditée par QAD USA, ce produit est mis en place en Algérie pour de grande entreprises industrielles dans divers secteurs d’activité, principalement l’agro-alimentaire, mais aussi la transformation de produit plastique, produit de bien-être, et dans l’électronique.  ",
    },
    {
      id: 2,
      name: "Outil BI",
      description:
        "La solution TARGIT offre à votre compagnie toutes les informations et  connaissances, une visibilité accrue qui vous seront nécessaires pour une prise de décision en toute confiance, et le courage nécessaire pour agir et optimiser vos choix vers un rendement maximal de vos activités.",
    },
    {
      id: 3,
      name: "Axiom ERP",
      description:
        "La solution AXIOM-ERP est un outil de gestion intégré de toute l’activité de l’entreprise, éditée par acsiome technologies. Développé en full-web, accessible par n’importe quel appareil connecté, et répondant aux exigences et attentes des entreprises commerciale et industrielle, cet outil est équipé d’un module de gestion de la distribution des colis; vous permettant de suivre la livraison de vos produits partout sur le territoire national et en temps réel",
    },
    {
      id: 4,
      name: "Axiom COLIS",
      description:
        "La solution de gestion de la distribution des colis vous permet de prendre les commandes de vos clients sur le terrain et de faire remonter ces informations en temps réel, pour optimiser vos flux de livraison.Elle vous permet aussi de gérer au mieux votre relation avec vos partenaires, de suivre l’activité de vos équipes de ventes, et vos performances sur le terrain.L’outil est doté d’un générateur de code à barre / Code QR pour l’identification de vos colis et Partenaire...",
    },
    {
      id: 5,
      name: "Axiom Delivery",
      description:
        "La solution de gestion de la distribution directe est structurée en modules complémentaires qui vous permettent de gérer l’activité de vos équipes de ventes et réaliser votre plein potentiel en intégrant le maximum d’informations sur l’évolution des ventes et la veille concurrentielle en temps réel",
    },
    {
      id: 6,
      name: "Axiom Optic",
      description:
        "AxiomOptic est un logiciel complet pour les opticiens facile et rapide a prendre en main, Il vous permettra d’informatiser la gestion de votre magasin et d’en exploiter les données de la gestion de vos fiches clients, en passant par la caisse ou encore le stock et les achats , les ventes . AxiomOptic est adapté à tout opticien amené à gérer un magasin d’optique. Il vous permettra d’accroître de manière significative la productivité de votre magasin. Développé en full-web, accessible par n’importe quel appareil connecté, et répondant aux exigences.",
    },
    {
      id: 7,
      name: "Axiom Auditif",
      description:
        "AxiomAuditif est un logiciel complet pour les centres d'audioprothèse facile et rapide a prendre en main, Il vous permettra d’informatiser la gestion de votre magasin,de suivre l audiometries de vos patients et d’en exploiter les données De la gestion de vos fiches patients, en passant par la caisse ou encore le stock et les achats, les ventes et le SAV AxiomAuditif est adapté à tout centre d'audioprothèse amené à gérer son magasin. Il vous permettra d’accroître de manière significative la productivité de votre magasin. Développé en full-web, accessible par n’importe quel appareil connecté, et répondant aux exigences.",
    },
  ];
  return (
    <div
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-textPrimary overflow-hidden"
      id="solutions"
    >
      <div className="text-center my-2">
        <h1 className="text-4xl text-neutralDGrey font-semibold mb-10 mt-10">
          Nos solutions
        </h1>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-100 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex h-full bg-bgWhite justify-center items-center"
          >
            <div className="mb-4 h-50  mx-auto">
              <h4 className="font-bold text-neutralDGrey">{solution.name}</h4>
              <p className="text-sm text-neutralDgrey ">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
