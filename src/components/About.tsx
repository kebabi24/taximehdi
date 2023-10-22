import React, { useState, useEffect } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
const About = () => {
  return (
    // <div className="md:px-14 px-4 py-4 max-w-screen-2xl mx-auto" id="about">
    //   <motion.div
    //     variants={fadeIn("up", 0.2)}
    //     initial="hidden"
    //     whileInView={"show"}
    //     viewport={{ once: false, amount: 0.7 }}
    //     className="text-center"
    //   >
    //     <h1 className="text-4xl text-neutralDGrey font-semibold mb-2">
    //     Qui sommes-nous
    //     </h1>
    //     <p className="text-neutralDGrey my-2">
    //       ACSIOME TECHNOLOGIES est une SS2I spécialisée dans le développement et
    //       l’intégration de solutions sur mesure pour le compte de ses clients,
    //       né de la collaboration d’ingénieurs algériens, dans le domaine de la
    //       recherche opérationnelle, l'informatique et le génie Industrielle.
    //     </p>
    //     <p className="text-neutralDGrey my-2">
    //       ACSIOME TECHNOLOGIES fondée en 2015, est créditée d’un capital
    //       expérience au savoir-faire dans le domaine de l'intégration de
    //       solutions SI reconnus et apprécié par nos partenaires métier.
    //     </p>
    //     <p className="text-neutralDGrey my-2">
    //       ACSIOME TECHNOLOGIES fonde son activité sur la satisfaction continue
    //       des besoins et exigences de sa clientèle. La confiance qui lie ACSIOME
    //       TECHNOLOGIES à ses partenaires est animée par une politique de qualité
    //       de service irréprochable et une maitrise des produits et services
    //       indiscutable.
    //     </p>
    //   </motion.div>
    // </div>
    <>
      <div
        className="container flex flex-wrap p-12 max-w-screen-2xl py-28 mx-auto overflow-hidden"
        id="about"
      >
        <div className="px-4 lg:w-1/2 md:w-1/2">
          <h1 className="text-4xl text-blackBlack font-bold mb-2">
            Qui sommes-nous
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-1/2">
          <p className="text-neutralDGrey my-2 mb-4">
            ACSIOME TECHNOLOGIES est une SS2I spécialisée dans le développement
            et l’intégration de solutions sur mesure pour le compte de ses
            clients, né de la collaboration d’ingénieurs algériens, dans le
            domaine de la recherche opérationnelle, l'informatique et le génie
            Industrielle.
          </p>
          <p className="text-neutralDGrey my-2 mb-4">
            ACSIOME TECHNOLOGIES fondée en 2015, est créditée d’un capital
            expérience au savoir-faire dans le domaine de l'intégration de
            solutions SI reconnus et apprécié par nos partenaires métier.
          </p>
          <p className="text-neutralDGrey my-2 mb-4">
            ACSIOME TECHNOLOGIES fonde son activité sur la satisfaction continue
            des besoins et exigences de sa clientèle. La confiance qui lie
            ACSIOME TECHNOLOGIES à ses partenaires est animée par une politique
            de qualité de service irréprochable et une maitrise des produits et
            services indiscutable.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
