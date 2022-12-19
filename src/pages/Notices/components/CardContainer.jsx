import {Link} from 'react-router-dom'
import {IoIosStarOutline, IoIosStar} from "react-icons/io"

import styles from "./CardContainer.module.css"

const CardContainer = ({Image}) => {
 
  return (
    <div className={styles.container}>

      <div className={styles.img_container}>
        <img src={Image} alt="Noice" />
        <span>Até: 12/11/2021</span>
      </div>

     <div className={styles.container_max_of_info}>
      <div className={styles.info_container}>
          <h2>
            <Link to="/">
              Combate às desigualdades e objetivos de
              desenvolvimento
            </Link>
          </h2>
          <p>Sociologia</p>
          <p>Pontifícia Universidade Católica de São Paulo</p>
          <div className={styles.link_info}>
            <p>São Paulo, SP</p>
            <p>Duração: 12 meses</p>
            <Link to="/notices/id">Veja mais</Link>
          </div>
        </div>
     </div>

     <div className={styles.favorite}>
        <button>
          <IoIosStarOutline/>
        </button>
      </div>

    </div>
  )
}

export default CardContainer
