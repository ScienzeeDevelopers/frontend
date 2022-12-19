import styles from "./Article.module.css";
import { Link, NavLink } from "react-router-dom";

// Component
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import User from "../../assets/imagens/user.svg";


const Article = () => {
  return (
    <div className={styles.container}>
      
      <ul className="list_choice">
        <li>
          <Link
            to="/articles/current"
          >
            Atuais
          </Link>
        </li>
        <li>
          <Link 
            to="/articles/favorite"
          >
            Favoritos
          </Link>
        </li>
        <li>
          <Link 
            to="/articles/create"
          >
            Criar Artigo
          </Link>
        </li>
      </ul>

      <div className={styles.article}>
        <div className={styles.article_container}>
          <div className={styles.information}>
            <h2 className={styles.title}>Título: Conclusões Retiradas dos Fenômenos da Capilaridade.</h2>
            <h2>Área de pesquisa: Física</h2>
            <div to="/" className={styles.user}>
                <img src={User} alt="username" />
                <Link to="/"><h2>Albert Eisten</h2></Link>
            </div>
            <h3>Resumo:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              iaculis tortor turpis, eu eleifend urna lacinia nec. Suspendisse
              potenti. Etiam facilisis nisi augue, sit amet cursus nibh
              porttitor eget. Nunc metus turpis, ultricies eget nibh vel,
              pulvinar laoreet mi. Nunc efficitur leo nec porttitor porttitor.
              Aliquam elementum, lorem ac molestie, ante nibh tincidunt
              mauris...Ver maisLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi iaculis tortor turpis, eu eleifend urna
              lacinia nec. Suspendisse potenti. Etiam facilisis nisi augue, sit
              amet cursus nibh porttitor eget. Nunc metus turpis, ultricies eget
              nibh vel, pulvinar laoreet mi. Nunc efficitur leo nec porttitor
              porttitor. Aliquam elementum, lorem ac gravida molestie, ante nibh
              tincidunt mauris...Ver maisLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi iaculis tortor turpis, eu eleifend urna
              lacinia nec. Suspendisse potenti. Etiam facilisis nisi augue, sit
              amet cursus nibh porttitor eget. Nunc metus turpis, ultricies eget
              nibh vel, pulvinar laoreet mi. Nunc efficitur leo nec porttitor
              porttitor. Aliquam elementum, lorem ac molestie, ante nibh
              tincidunt mauris a nec. Suspendisse potenti. Etiam facilisis nisi
              augue, sit amet cursus nibh porttitor eget. Nunc metus turpis,
              ultricies eget nibh vel, pulvinar laoreet mi. Nunc efficitur leo
              nec porttitor porttitor. Aliquam elementum, lorem ac gravida
              molestie, ante nibh tincidunt mauris...Ver maisLorem ipsum dolor
              sit amet, consectetur adipiscing elit. Morbi iaculis tortor
              turpis, eu eleifend urna lacinia nec. Suspendisse potenti. Etiam
              facilisis nisi augue, sit amet cursus nibh porttitor eget. Nunc
              metus turpis, ultricies eget nibh vel, pulvinar laoreet mi. Nunc
              efficitur leo nec porttitor porttitor. Aliquam elementum, lorem ac
              molestie, ante nibh
            </p>
          </div>
          <div>
            <button className={styles.favButton}>
              <IoIosStarOutline />
            </button>
          </div>
        </div>
        <div className={styles.divButton}>
            <button className="btn_traditional">Visualizar Artigo</button>
        </div>
      </div>
    </div>
  );
};

export default Article;
