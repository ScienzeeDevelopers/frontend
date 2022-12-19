import styles from "./Search.module.css"

// Components
import CardContent from "./components/CardContent"

const Search = () => {
  return (
    <div className={styles.container_search}>
        <div className={styles.title_container}>
          <h1>Exibindo resultados para: <span className={styles.search}>Estudo da Luz e Calor</span></h1>
        </div>

        <CardContent />

        <div className={styles.sim}>
          <span>Artigos semelhantes:</span>
        </div>

        <div className={styles.similar}>

         {[0,0,0,0].map((i, index) => (
           <CardContent key={index}/>
         ))}

        </div>
    </div>
  )
}

export default Search