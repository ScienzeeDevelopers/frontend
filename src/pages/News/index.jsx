import styles from './News.module.css'

//components
import NewsContainer from './components/NewContainer'

//imagen
import News1 from "../../assets/News_1.png"

const News = () => {
  return (
    <div className={styles.container}>

      <h2 className={styles.title}>Notícias</h2>

      <div className={styles.news_container}>

        <NewsContainer
          image={News1} 
          title="O enigma do maior vulcão ativo da Europa, escondido sob as águas"
          text="Quando pensamos nos vulcões da Itália, podemos supor que o Etna, na Sicília, e o Vesúvio, que destruiu Pompeia, representam o maior perigo para a população e os turistas da península e suas ilhas......"
          id=":id"
        />

        <NewsContainer
          image={News1} 
          title="O enigma do maior vulcão ativo da Europa, escondido sob as águas"
          text="Quando pensamos nos vulcões da Itália, podemos supor que o Etna, na Sicília, e o Vesúvio, que destruiu Pompeia, representam o maior perigo para a população e os turistas da península e suas ilhas......"
        />

        <NewsContainer
          image={News1} 
          title="O enigma do maior vulcão ativo da Europa, escondido sob as águas"
          text="Quando pensamos nos vulcões da Itália, podemos supor que o Etna, na Sicília, e o Vesúvio, que destruiu Pompeia, representam o maior perigo para a população e os turistas da península e suas ilhas......"
        />

        <NewsContainer
          image={News1} 
          title="O enigma do maior vulcão ativo da Europa, escondido sob as águas"
          text="Quando pensamos nos vulcões da Itália, podemos supor que o Etna, na Sicília, e o Vesúvio, que destruiu Pompeia, representam o maior perigo para a população e os turistas da península e suas ilhas......"
        />

        <NewsContainer
          image={News1} 
          title="O enigma do maior vulcão ativo da Europa, escondido sob as águas"
          text="Quando pensamos nos vulcões da Itália, podemos supor que o Etna, na Sicília, e o Vesúvio, que destruiu Pompeia, representam o maior perigo para a população e os turistas da península e suas ilhas......"
        />

        <button className='btn_traditional'>Carregar mais</button>

      </div>
    </div>
  )
}

export default News