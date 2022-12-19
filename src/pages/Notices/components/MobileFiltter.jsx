import React from 'react'
import styles from "./MobileFiltter.module.css"

const MobileFiltter = () => {
  return (
    <div className={styles.mobile_filtter}>
      <h2>Filtros</h2>
      <div className={styles.filters_container}>
        
        <div className={styles.area}>
          <h3>Áreas</h3>
          <select>
            <option value="Exatas">Exatas e da Terra</option>
            <option value="Biologicas">Biológicas</option>
            <option value="Engenarias">Engenharias</option>
            <option value="Agrarias">Agrarias</option>
            <option value="Socias">Sociais Aplicadas</option>
            <option value="Humanas">Humanas</option>
            <option value="Linguistica">Linguística, Letras e Artes</option>
          </select>
        </div>

        <div className={styles.inputs_container}>
          <div className={styles.states}>
            <h3>Estado</h3>
            <input type="text" placeholder='Ex: SP'/>
          </div>

          <div className={styles.citys}>
            <h3>Cidade</h3>
            <input type="text" placeholder='Ex: São Paulo'/>
          </div>
        </div>

        <div className={styles.institution}>
          <h3>Instituto</h3>
          <select>
            <option value="USP">USP</option>
            <option value="Embrapa">Embrapa</option>
            <option value="Campinas">Instituto agronômico de Campinas</option>
            <option value="Butantan">Instituto Butantan</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default MobileFiltter