import styles from "./SearchInput.module.css";

// Component
import Loupe from "../../assets/Icons/icons_navbar/search.svg";
import {FaRegBell} from "react-icons/fa"

const Searchinput = ({handleActiveMessage}) => {

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container_box}>
      <form onSubmit={handleSearch} className={styles.container}>
        <label className={styles.search}>
          <img src={Loupe} alt="lupa" />
          <input type="text" placeholder="Pesquisar" />
        </label>
      </form>
      <FaRegBell onClick={handleActiveMessage}/>
    </div>
  );
};

export default Searchinput;
