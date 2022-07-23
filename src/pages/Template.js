import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { PageErreur } from "../composants/PageErreur";
import { useNavigation } from "../hook/useNavigation";
import { Navigation } from "../layout/Navigation";
import { BarreMenu } from "../layout/BarreMenu";

/**
 * Composant servant de base à l'application
 * @returns {JSX.Element}
 * @constructor
 */
export const Template = () => {
  // ====== PARAMETRAGE ====== //

  const {reloadPage, navigateLastPage} = useNavigation()

  // ====== AFFICHAGE ====== //

  return (
    <ErrorBoundary FallbackComponent={PageErreur} onReset={reloadPage}>
      <BarreMenu />
      <Navigation navigateLastPage={navigateLastPage} />
    </ErrorBoundary>
  )
}
