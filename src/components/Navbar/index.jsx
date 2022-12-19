import {IoReorderFourOutline, IoNewspaperOutline, IoHomeSharp} from "react-icons/io5"
import {FaUserCircle, FaRegBell} from "react-icons/fa"
// styles
import styles from './Navbar.module.css'
// logo
import Scienzee from "../../assets/Scienzee.svg"
//icons
import Loupe from '../../assets/Icons/icons_navbar/search.svg'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({handleMessageActive}) => {


  return (
    <header  className={styles.container}>
      <nav className={styles.container_nav}>
        <Link to="/news">
          <img className={styles.logo} src={Scienzee} alt="Scienzee" />
        </Link>
        <div className={styles.search_container}>
            <img src={Loupe} alt="lupa" />
            <input type="text" placeholder='Pesquisar'/>
        </div>

        <ul className={styles.list_menu}>

          <div className={styles.list_menu_icon}>
            <li className={styles.menu_icon}>
              <NavLink 
                className={({isActive}) => (isActive ? styles.active : "")} 
                to="/news">
                  <IoHomeSharp/>
                  <p className={styles.txt_menu}>Notícias</p>
              </NavLink>
            </li>

            <li className={styles.menu_icon}>
              <NavLink 
                className={({isActive}) => (isActive ? styles.active : "")} 
                to="/notices">
                  <IoNewspaperOutline />
                  <p className={styles.txt_menu}>Editais</p>
              </NavLink>
            </li>

            <li className={styles.menu_icon}>
              <NavLink 
                className={({isActive}) => (isActive ? styles.active : "")} 
                to="/articles">
                  <IoReorderFourOutline/>
                  <p className={styles.txt_menu}>Artigos</p>
              </NavLink>
            </li>

            <li className={styles.menu_icon}>
              <NavLink 
                className={({isActive}) => (isActive ? styles.active : "")} 
                to="/profile">
                  <FaUserCircle/>
                  <p className={styles.txt_menu}>Perfil</p>
              </NavLink>
            </li>
          </div>

        </ul>  
        
      </nav>
      <div className={styles.bell_container}>
        <FaRegBell onClick={handleMessageActive}/>
      </div>
    </header>
    
  )
}

export default Navbar