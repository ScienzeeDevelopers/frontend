import styles from "./NewContainer.module.css"
import { Link } from "react-router-dom"

const NewsContainer = ({image, title, text, id}) => {
  return (
    <div className={styles.container}>

        <img src={image} alt="capa" />

        <div className={styles.info_container}>

            <Link to={`/news/${id}`}>
              <h2>{title}</h2>
              <p>{text}</p>
            </Link>

        </div>
        
    </div>
  )
}

export default NewsContainer