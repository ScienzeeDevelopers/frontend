import styles from "./CardContent.module.css"

// Components
import { Link } from "react-router-dom"
import Image from "../../../assets/imagens/user.svg"
import {IoIosStarOutline, IoIosStar} from "react-icons/io"


const CardContent = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h2>Titulo: Estudo da Luz e Calor</h2>
            <h2>Área de atuação: Físca</h2>
            <div className={styles.user}>
                <h3>Autor:</h3>
                <div className={styles.img_container}>
                    <img src={Image} alt="username" />
                    <Link to="/profile">Albert Einstein</Link>
                </div>
            </div>
            <div className={styles.text}>
                <span>Resumo:</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis tortor turpis, eu eleifend urna lacinia nec. Suspendisse potenti. Etiam facilisis nisi augue, sit amet cursus nibh porttitor eget. Nunc metus turpis, ultricies eget nibh vel, pulvinar laoreet mi. Nunc efficitur leo nec porttitor porttitor. Aliquam elementum, lorem ac gravida molestie, ante nibh tincidunt mauris, ac hendrerit velit arcu a odio. Fusce elit augue, sagittis at vestibulum non, pharetra at mi. Praesent pharetra nisl vel dictum ullamcorper. Aenean in pretium....Veja mais</p>
            </div>
        </div>
        <div className={styles.container_icon}>
            <IoIosStarOutline/>
        </div>
    </div>
  )
}

export default CardContent