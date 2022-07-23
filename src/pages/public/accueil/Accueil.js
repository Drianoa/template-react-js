import React, { useState } from "react";
import logo from "../../../images/logo.svg";
import "../../../css/styles.css";
import { useTranslation } from "react-i18next";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { enGB, fr } from "date-fns/locale";
import _ from "lodash";

/**
 * Composant permettant d'afficher la page d'accueil
 * @returns {JSX.Element}
 * @constructor
 */
function Accueil() {
  // ====== PARAMETRAGE ====== //

  /** Hook de traduction */
  const {t, i18n} = useTranslation()

  // ====== VARIABLES ====== //

  /** Option de langues pour la traduction */
  const options = [
    {
      label: 'Français',
      value: 'fr',
      dateLocale: fr,
    },
    {
      label: 'English',
      value: 'en',
      dateLocale: enGB,
    },
  ]

  /** Langue sélectionnée dans l'application */
  const [selectedOption, setSelectedOption] = useState(options[0])

  /** Date d'aujourd'hui */
  const today = new Date()

  /** Date d'il y'a 3 jours  */
  const moins3Jour = subDays(today, 3)

  /** Variable définissant la langue utilisée par les dates */
  const locale = selectedOption.dateLocale

  /** Date formatée au format "Lundi 01 janvier 1970" */
  const formatDay = format(today, 'eeee dd MMMM  yyyy', {locale})

  /** Date permettant de calculer le nombre de jours depuis aujourd"hui */
  const formatDistanceToday = formatDistance(moins3Jour, today, {
    locale,
    addSuffix: true,
  })

  /** Date permettant de caculer le jour selon un ajout ou un retrait de jours */
  const formatRelativeToday = formatRelative(moins3Jour, today, {
    locale,
  })

  // ====== METHODES ====== //

  /** Fonction permettant de changer de langage dans l'application */
  function handleChangeLanguage(event) {
    const newLanguage = options.find(e => e.value === event.target.value)
    setSelectedOption(newLanguage)
    i18n.changeLanguage(newLanguage.value)
  }

  // ====== AFFICHAGE ====== //

  return (
    <React.Fragment>
      <div className="center-page">
        <img src={logo} className="logo animation-rotate" alt="logo" />
        <select value={selectedOption.value} onChange={handleChangeLanguage}>
          {_.sortBy(options, ['label']).map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p>{t('accueil.titre')}</p>
        <p>{`${formatDay} (${t('commun.aujourdhui')})`}</p>
        <p>{`${formatRelativeToday} (${formatDistanceToday})`}</p>

        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('accueil.description')}
        </a>
      </div>
    </React.Fragment>
  )
}

export default Accueil
