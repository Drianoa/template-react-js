import React from "react";

import "./chargement.css";

/**
 * Composant permettant d'afficher une image pivotant à 360°
 * @param logo Image à faire pivoter
 * @returns {JSX.Element}
 * @constructor
 */
export const Chargement = ({logo}) => (
  <div className={'container-logo'}>
    <img src={logo} className="logo animation-rotate" alt="logo" />
  </div>
)
