import styles from "./EditProfile.module.css";
import Profile from "../../assets/imagens/Profile.svg";

// Conponents
import { Link } from "react-router-dom";

// Hooks
import { useState } from "react";

const EditProfile = () => {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [titles, setTitles] = useState("")
  const [email, setEmail] = useState("")
  const [state, setState] = useState("")
  const [urlLinkedin, setUrlLinkedin] = useState("")
  const [urlLettes, setUrlLettes] = useState("")
  const [bio, setBio] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      lastName,
      titles,
      email,
      state,
      urlLinkedin,
      urlLettes,
      bio
    })
  };

  return (
    <div className={styles.container_edit_profile}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.profilePicture}>
          <img src={Profile} alt="username" />
          <label>
            <span>Alterar imagem do perfil</span>
            <input type="file" />
          </label>
        </div>

        <div className={styles.info_user}>
          <div className={styles.form_inputs}>
            <div className={styles.username}>
              <label>
                <span>Nome</span>
                <input
                  type="text"
                  placeholder="First name"
                  className={styles.inputs}
                  onChange={e => setName(e.target.value)}
                  value={name || ""}
                />
              </label>
              <label>
                <span>Sobrenome</span>
                <input
                  type="text"
                  placeholder="Last name"
                  className={styles.inputs}
                  onChange={e => setLastName(e.target.value)}
                  value={lastName || ""}
                />
              </label>
            </div>

            {/* Inputs */}
            <label>
              <span>Títulos</span>
              <input
                type="text"
                placeholder="Matemático, Físico, Inventor..."
                className={styles.inputs}
                onChange={e => setTitles(e.target.value)}
                value={titles || ""}
              />
            </label>
            <label>
              <span>E-mail</span>
              <input
                type="text"
                placeholder="seuemail@gmail.com"
                className={styles.inputs}
                onChange={e => setEmail(e.target.value)}
                value={email || ""}
              />
            </label>
            <label>
              <span>Estado</span>
              <input
                type="text"
                placeholder="São Paulo"
                className={styles.inputs}
                onChange={e => setState(e.target.value)}
                value={state || ""}
              />
            </label>
            <label>
              <span>Endereço LinkedIn</span>
              <input
                type="text"
                placeholder="userLinkedin/linkedin.com.br"
                className={styles.inputs}
                onChange={e => setUrlLinkedin(e.target.value)}
                value={urlLinkedin || ""}
              />
            </label>
            <label>
              <span>Endereço Currículo Lettes</span>
              <input
                type="text"
                placeholder="ULR do seu curriculo lettes"
                className={styles.inputs}
                onChange={e => setUrlLettes(e.target.value)}
                value={urlLettes || ""}
              />
            </label>

            <div className={styles.buttons_DESKTOP}>
              <Link to="/">Alterar senha</Link>
              <input type="submit" className="btn_traditional" value="Salvar"/>
            </div>
          </div>
          <label className={styles.aboutMe}>
            <span>Sobre mim</span>
            <textarea
              onChange={e => setBio(e.target.value)}
              value={bio || 'Sou um físico teórico alemão que desenvolvi a teoria da relatividade geral, um dos pilares da física moderna ao lado da mecânica quântica. Embora sou mais conhecido por minha fórmula de equivalência massa-energia, E = mc² — que foi chamada de "a equação mais famosa do mundo" —, fui laureado com o Prêmio Nobel de Física de 1921 "por minhas contribuições à física teórica" e, especialmente, por minha descoberta da lei do efeito fotoelétrico, que foi fundamental no estabelecimento da teoria quântica.'}
            >
            </textarea>
          </label>
        </div>
        <div className={styles.buttons_MOBILE}>
            <Link to="/">Alterar senha</Link>
            <input type="submit" className="btn_traditional" value="Salvar"/>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
