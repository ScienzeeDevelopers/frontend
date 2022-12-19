import styles from "./Card_content.module.css"
import { Link } from "react-router-dom"

const Card_content = ({image, title, description}) => {
  return (
    <div className={styles.card_content}>
      <img src={image} alt={title} />
        <div>
            <h3>
              <a className={styles.title} href="/">
                <Link to="/news">{title}</Link>
              </a>
            </h3>
            <p>
              {description}
            </p>
        </div>
    </div>
  )
}

export default Card_content
