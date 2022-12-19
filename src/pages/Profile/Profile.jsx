import { Link } from "react-router-dom"
import styles from "./Profile.module.css"

// Hooks
import { useState } from "react"

//Components
import Image from "../../assets/imagens/Profile.svg"
import LinkedIn from "../../assets/Icons/linkedin_02.svg"
import ProfileIcon from "../../assets/Icons/profileIcon.svg"
import ChangeComponent from "./components/ChangeComponent"

import MyArticles from "./components/MyArticles"
import MyNotice from "./components/MyNotice"
import FavoriteNotices from "./components/FavoriteNotices"
import FavoriteArticles from "./components/FavoriteAricles"
import FavoriteAricles from "./components/FavoriteAricles"


const Profile = () => {

  const [choiced, setChoiced] = useState("MyArt")

  const childToParent = (option) => {
    setChoiced(option)
  }

  return (
    <div className={styles.profile_container}>
        <div className={styles.user_infomation}>

          <div className="user_info_profile">
            <img 
              src={Image} 
              alt="User Picture"
            />
            <div className="username_and_desc">
                <h2>Albert Einstein</h2>
                <p>Físico, Professor Matemático, Filosofo, Pedagogo e Inventor</p>
            </div>
          </div>
          
          <div className="aboutMe_container">

            <div className="bio">
              <strong>Sobre mim:</strong>
              <div className="bio_icons">
                <img src={LinkedIn} alt="likedin" />
                <img src={ProfileIcon} alt="profile Icon" />
              </div>
            </div>
            <p>Sou um físico teórico alemão que desenvolvi a teoria da relatividade geral, um dos pilares da física moderna ao lado da mecânica quântica. Embora sou mais conhecido por minha fórmula de equivalência massa-energia, E = mc² — que foi chamada de "a equação mais famosa do mundo" —, fui laureado com o Prêmio Nobel de Física de 1921 "por minhas contribuições à física teórica" e, especialmente, por minha descoberta da lei do efeito fotoelétrico, que foi fundamental no estabelecimento da teoria quântica.</p>

          </div>

        </div>
        <div className={styles.edit}>
          <Link to="/profile/edit">Editar Perfil</Link>
        </div>

       <ChangeComponent childToParent={childToParent}/>

       <div className={styles.my_objects}>
          {choiced == "MyArt" && (
            <>
              {[0,0,0.0,0,0,0].map((n, index) => (
                <MyArticles
                  key={index}
                  title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                />
              ))}
            </>
          )}
          {choiced == "MyNot" && (
            <>
              {[0,0,0].map((n, index) => (
                <MyNotice
                  key={index}
                  title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                />
              ))}
            </>
          )}
          {choiced == "FavNot" && (
            <>
              {[0,0,0].map((n, index) => (
                <FavoriteNotices
                  key={index}
                  title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                />
              ))}
            </>
          )}
          {choiced == "FavArt" && (
            <>
              {[0,0,0].map((n, index) => (
                <FavoriteArticles
                  key={index}
                  title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                />
              ))}
            </>
          )}
       </div>
    </div>
  )
}

export default Profile