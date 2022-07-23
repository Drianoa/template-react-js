import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Chargement } from "../composants/Chargement/Chargement";
import "../images/logo.svg";

/**
 * Composant permettant de fournir des contextes à l'application
 * @returns {JSX.Element}
 * @constructor
 */
export const Providers = ({children}) => (
  <Suspense fallback={<Chargement />}>
    <BrowserRouter>{children}</BrowserRouter>
  </Suspense>
)
