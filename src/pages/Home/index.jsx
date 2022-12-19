import {Link} from "react-router-dom"

// components
import Card_content from "./components/Card_content"

// styles
import styles from "./Home.module.css"

// logo
import Logo from "../../assets/Scienzee.svg"
// Images
import Image01 from "../../assets/imagens/01.svg"
import Image02 from "../../assets/imagens/02.svg"
import Image03 from "../../assets/imagens/03.svg"
import Image04 from "../../assets/imagens/04.svg"
import Image05 from "../../assets/imagens/05.svg"
import Image06 from "../../assets/imagens/06.svg"
import Image07 from "../../assets/imagens/07.svg"
import Image08 from "../../assets/imagens/08.svg"


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>

        <div className={styles.info_container}>

        <div className={styles.title}>
          <h1>Seja bem-vindo à</h1>
          <img src={Logo} alt="Scienzee" />
        </div>

        <h2>A startup do mundo academico que você precisa.</h2>

        <div className={styles.texts}>
          <p>Somos uma startup voltada para a área de pesquisa acadêmica e cienctifica que tem como objetivo a unificação dos editais em uma só plataforma.</p>
          <p><strong>Missão:</strong> Facilitar a busca por <span className="strong_text">editais,</span> <span className="strong_text">artigos acadêmicos e cientificos,</span> aproximando pesquisadores de empresas inovadoras que apoiam pesquisas deste nicho de mercado.</p>
          <p><strong>Visão:</strong> Informar, Trasformar e Ampliar a valorização e o <span className="strong_text">acesso à pesquisa acadêmica.</span></p>
          <p><strong>Valores:</strong> Liberdade e Trasparência; Diversidade e Inclusão; Espírito Empreendedor e Sonho Grande.</p>
        </div>

        <div className={styles.button_container}>
          <a href="/login" className="btn_traditional">Login</a>
          <p>ou</p>
          <a href="/register" className={styles.btn_register}>Cadastre-se</a>
        </div>

        </div>

      </div>

      <div className={styles.container_content}>
        <h2>Confira os melhores Editais e Artigos nas áreas de conhecimento científico</h2>

        <div className={styles.cards_content}>

            <Card_content
              image={Image01}
              title="Ciências Exatas e da Terra"
              description="Matemática, probabilidade, estatística, ciência da computação..."
            />
            <Card_content
              image={Image02}
              title="Ciências Biológicas"
              description="Biologia, bioquímica, biofísica, genética, farmacologia, botânica..."
            />
            <Card_content
              image={Image03}
              title="Engenharia"
              description="Engenhara civil, elétrica, mecânica, química, sanitária, de produção..."
            />
            <Card_content
              image={Image04}
              title="Ciências da Saúde"
              description="Medicina, enfermagem, farmácia, odontologia, nutrição, saúde coletiva..."
            />
            <Card_content
              image={Image05}
              title="Ciências Agrárias"
              description="Agronomia, recursos florestais (incluindo engenharia florestal)..."
            />
            <Card_content
              image={Image06}
              title="Ciências Sociais"
              description="Direito, administração, economia, arquitetura e urbanismo..."
            />
            <Card_content
              image={Image07}
              title="Ciências Humanas"
              description="Filosofia, sociologia, antropologia, arqueologia, história, geografia..."
            />
            <Card_content
              image={Image08}
              title="Linguística, Letras e Artes"
              description="Linguística, letras, artes, música, dança, teatro, cinema e fotografia..."
            />

        </div>

      </div>

    </div>
  )
}

export default Home