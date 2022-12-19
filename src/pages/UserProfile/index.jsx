import styles from './UserProfile.module.css'
import Profile from "../../assets/imagens/Profile.svg"
import LinkedIn from "../../assets/Icons/linkedin_02.svg"
import ProfileIcon from "../../assets/Icons/profileIcon.svg"

// Components
import {Link} from "react-router-dom"
import ChangeComponent from './components/ChangeComponent'

// Hooks
import { useState } from 'react'
import Card from './components/Card'

const UserProfile = () => {

    const [optionChild, setOptionChild] = useState("favArt")

    // Get the option of children
    const childToParent = (optionOfChild) => setOptionChild(optionOfChild)

  return (
    <div className={styles.container_user_profile}>
        <div className={styles.user_info}>

            <div className='user_info_profile'>
                <img 
                    src={Profile} 
                    alt="username"
                />
                <div className='username_and_desc'>
                    <h2>Albert Einstein</h2>
                    <p>Físico, Professor Matemático, Filosofo, Pedagogo e Inventor</p>
                </div>
                <div className={styles.btn_container}>
                    <button className='btn_traditional'>Seguir</button>
                </div>
            </div>
            <div className='aboutMe_container'>
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

        <ChangeComponent childToParent={childToParent}/>

        <div className='my_objects'>
            {/* My Articles*/}
            {optionChild == "myArt" && (
               <>
                    <Card 
                        title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                    />
                    <Card 
                        title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                    />
                    <Card 
                        title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                    />
                    <Card 
                        title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                    />

               </>
            )}

            {/* My favorite Articles*/}
            {optionChild == "favArt" && (
               <>
                    <Card 
                        title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                    />
                    <Card 
                        title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                    />
                    <Card 
                        title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                    />
                    <Card 
                        title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                    />
                    <Card 
                        title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                    />
                    <Card 
                        title="Avaliação do Estado de Conservação da Fauna Brasileira e a Lista de Espécies Ameaçadas: o que significa, qual sua importância, como fazer?"
                    />

               </>
            )}
        </div>
    </div>
  )
}

export default UserProfile