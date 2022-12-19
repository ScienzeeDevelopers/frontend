import React from 'react'

import styles from "./Filtter.module.css"

const Filtter = () => {
  return (
    <div className={styles.container}>
      <h2>Filtros</h2>
      <div className={styles.filtter_container}>
          <h3>Áreas</h3>
          <ul>
              <li>Extas e da Terra</li>
              <li>Biológicas</li>
              <li>Engenharias</li>
              <li>Saúde</li>
              <li>Agrárias</li>
              <li>Sociais Aplicadas</li>
              <li>Humanas</li>
              <li>Linguística, Letras e Artes</li>
          </ul>
      </div>
    </div>
  )
}

export default Filtter
