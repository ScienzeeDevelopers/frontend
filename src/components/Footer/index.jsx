import {Link} from "react-router-dom"
//styles
import styles from "./Footer.module.css"

// Icons
import LinkedIn from "../../assets/Icons/linkedin.svg"
import Facebook from "../../assets/Icons/facebook.svg"
import Twitter from "../../assets/Icons/twitter.svg"
import Instagram from "../../assets/Icons/instagram.svg"

const Footer = () => {
  return (
    <footer className={styles.page_container}>
        <ul className={styles.list}>
          <li>
            <Link to="/">Quem somos</Link>
          </li>
          <li>
            <Link to="/">Termos de uso</Link>
          </li>
          <li>
            <Link to="/">Privacidade</Link>
          </li>
          <li>
            <Link to="/">Fale conosco</Link>
          </li>
          <li>
            <Link to="/">Ajuda</Link>
          </li>
          <li>
            <Link to="/">Rede Sociais</Link>
          </li>
        </ul>
        <ul className={`${styles.list} ${styles.icons_list}`}>
          <li>
            <a href="/">
              <img src={LinkedIn} alt="Linkedin" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Instagram} alt="instagram" />
            </a>
          </li>
        </ul>
    </footer>
  )
}

export default Footer