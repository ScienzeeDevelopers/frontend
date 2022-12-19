import styles from './DesktopFillter.module.css'

const DesktopFillter = () => {
  return (
    <div className={styles.fillter_desktop}>

        <h2>Filtros</h2>
                
        <div className={styles.areas}>
            <h3>Área</h3>
            <p>Exatas e da Terra</p>
            <p>Biológicas</p>
            <p>Engenharias</p>
            <p>Agrarias</p>
            <p>Sociais Aplicadas</p>
            <p>Humanas</p>
            <p>Lingustica, Letras e Artes</p>   
        </div>
        <div className={styles.states}>
                <h3>Estado</h3>
                <select>
                    <option value="Acre">Acre</option>
                    <option value="Alagoas">Alagoas</option>
                    <option value="Amapá">Amapá</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Bahia">Bahia</option>
                    <option value="Ceará">Ceará</option>
                    <option value="Destrito Federal">Distrito Federal</option>
                    <option value="Espírito Santo">Espírito Santo</option>
                    <option value="Goiás">Goiás</option>
                    <option value="Maranhão">Maranhão</option>
                    <option value="Mato Grosso">Mato Grosso</option>
                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                    <option value="Minas Gerais">Minas Gerais</option>
                    <option value="Pará">Pará</option>
                    <option value="Paraíba">Paraíba</option>
                    <option value="Pernambuco">Pernambuco</option>
                    <option value="Piauí">Piauí</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                    <option value="Randônia">Randônia</option>
                    <option value="Roraima">Roraima</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Sergipe">Sergipe</option>
                    <option value="Tocantins">Tocantins</option>
                </select>
        </div>
        <div className={styles.citys}>
            <h3>Cidade</h3>
            <input type="text" placeholder='São Paulo'/>
        </div>
        <div className={styles.institution}>
            <h3>Instituições</h3>
            <p>USP</p>
            <p>Embrapa</p>
            <p>Instituto Agronômico de Campinas</p>
            <p>Instituto Butantan</p>
        </div>

    </div>
  )
}

export default DesktopFillter