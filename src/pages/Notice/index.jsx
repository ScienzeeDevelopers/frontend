import styles from "./Notice.module.css";

// Components
import NavigatePage from "../../components/NavigateToNotice/NavigatePage";
import Image from "../../assets/imagens/Notice.svg";
import LinkedIn from "../../assets/Icons/linkedin_02.svg";
import Facebook from "../../assets/Icons/facebook_blue.svg";
import Twitter from "../../assets/Icons/twitter_blue.svg";
import Share from "../../assets/Icons/corrente.svg";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

const Notice = () => {
  return (
    <div className={styles.container}>
      <NavigatePage />

      <div className={styles.notice}>
        <div className={styles.info_container}>
          <img className={styles.img} src={Image} alt="Edital Imagem" />
          <div className={styles.info}>
            <h3>Combate às desigualdades e objetivos de desenvolvimento</h3>
            <h3>Sociologia</h3>
            <h3>Pontifícia Universidade Católica de São Paulo</h3>
            <h3>São Paulo, SP</h3>
            <h3>Duração: 12 meses</h3>
            <h3>Esse edital abre em: 12/10/2020</h3>
            <div className={styles.icons_and_end}>
              <h3 className={styles.end_notice}>Encerra em: 12/11/2021</h3>
              <ul>
                <li>
                  <img src={LinkedIn} alt="LinkedIn" />
                </li>
                <li>
                  <img src={Facebook} alt="LinkedIn" />
                </li>
                <li>
                  <img src={Twitter} alt="LinkedIn" />
                </li>
                <li>
                  <img src={Share} alt="LinkedIn" />
                </li>
                <IoIosStarOutline />
              </ul>
            </div>
          </div>
        </div>
        <p className={styles.desc}>
          <span>Descrição:</span> O Brasil é um dos países mais desiguais do
          mundo. Essa desigualdade se expressa de variadas formas, em um
          espectro que vai de questões relacionadas à renda, à raça e ao gênero,
          passando pela saúde, pelo acesso à tecnologia, educação e outros
          tantos aspectos. Esse contexto nacional impacta e é impactado por
          dinâmicas locais, regionais e internacionais, sejam elas econômicas,
          políticas, culturais ou ambientais. Um dos maiores desafios postos à
          nossa sociedade é compreender melhor e mais profundamente as causas e
          consequências dessas desigualdades e encontrar formas inovadoras que
          possam promover um desenvolvimento sustentável, baseado na proteção
          dos direitos humanos. Para tanto, é fundamental a produção de
          conhecimento científico interdisciplinar que tenha o potencial de
          apontar caminhos de atuação para a superação deste contexto.
        </p>
        <div className={styles.btns}>
            <button className={styles.download}>Baixar o Edital</button>
            <button className="btn_traditional">Aplicar para esse Edital</button>
        </div>
      </div>
    </div>
  );
};

export default Notice;
