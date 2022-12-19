import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosStarOutline, IoIosStar} from "react-icons/io"

import styles from "./ContentCard.module.css"

import UserImage from "../../../assets/imagens/user.svg"

const ContentCard = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
          <Link to="/articles/id"><h2 className={styles.title}>Título: Conclusões Retiradas dos Fenômenos da Capilaridade.</h2></Link>
          <div>
              <h2 className={styles.area}>Área de pesquisa: Física</h2>
              <div>
                  <div className={styles.user_container}>
                        <Link 
                            to="/profile/"
                        >
                            <div className={styles.image_container}>
                                <img 
                                    src={UserImage} 
                                    alt="user"
                                />
                            </div>
                        </Link>
                        <Link to="/profile/">
                            <h2 className={styles.username}>Albert Einsten</h2>
                        </Link>
                  </div>
                  <h2 className={styles.resumen}>Resumo:</h2>
                  <p className={styles.text_resumen}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis tortor turpis, eu eleifend urna lacinia nec. Suspendisse potenti. Etiam facilisis nisi augue, sit amet cursus nibh porttitor eget. Nunc metus turpis, ultricies eget nibh vel, pulvinar laoreet mi. Nunc efficitur leo nec porttitor porttitor. Aliquam elementum, lorem ac gravida molestie, ante nibh tincidunt mauris...<Link to="/articles/id">Ver mais</Link>
                  </p>
              </div>
          </div>
      </div>

      <button className={styles.favoriteAdd}>
            <IoIosStarOutline/>
      </button>

    </div>
  )
}

export default ContentCard
