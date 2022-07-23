import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getAllFactures } from "../../../api/api-factures";
import { ROUTES } from "../../../constantes/constantes-routes";

/**
 * Composant permettant de manipuler une liste de données
 * @returns {JSX.Element}
 * @constructor
 */
export const Formulaires = () => {
  // ====== PARAMETRAGE ====== //

  /** Liste des paramètres permettant de filter la liste de données */
  const [searchParams, setSearchParams] = useSearchParams()

  // ====== VARIABLES ====== //

  /** Liste des données à manipuler */
  const invoices = getAllFactures()

  // ====== AFFICHAGE ====== //

  return (
    <React.Fragment>
      <div style={{display: 'flex'}}>
        <nav
          style={{
            borderRight: 'solid 1px',
            padding: '1rem',
          }}
        >
          <FiltreRecherche
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <ListeDonnees searchParams={searchParams} invoices={invoices} />
        </nav>
        <Outlet />
      </div>
    </React.Fragment>
  )
}

const FiltreRecherche = ({searchParams, setSearchParams}) => (
  <input
    value={searchParams.get('filter') || ''}
    onChange={event => {
      let filter = event.target.value
      if (filter) {
        setSearchParams({filter})
      } else {
        setSearchParams({})
      }
    }}
  />
)

const ListeDonnees = ({invoices, searchParams}) => (
  <React.Fragment>
    {invoices
      .filter(invoice => {
        let filter = searchParams.get('filter')
        if (!filter) return true
        let name = invoice.name.toLowerCase()
        return name.startsWith(filter.toLowerCase())
      })
      .map(invoice => (
        <NavLink
          style={({isActive}) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            }
          }}
          to={`${ROUTES.formulaires}/${invoice.number}`}
          key={invoice.number}
        >
          {invoice.name}
        </NavLink>
      ))}
  </React.Fragment>
)
