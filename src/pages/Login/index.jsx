import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"

// css
import styles from "./Login.module.css"

// Logotipo
import Scienzee from "../../assets/Scienzee.svg"
//icon
import LinkedIn from "../../assets/Icons/linkedin.svg"
import { logIn } from "../../actions/AuthAction";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [msg, setMsg] = useState({
        type: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }
        dispatch(logIn(data))
            .then(res => res)
            .then(res => {
                if (res) {
                    throw Error(res)
                }
            })
            .catch((err) => {
                setMsg({
                    type: 'error',
                    message: err.message
                })
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <img className={styles.logo} src={Scienzee} alt="Scienzee" />
                <form onSubmit={handleSubmit}>
                    {msg.type === 'success' ? <span style={{ color: "green" }}>{msg.message}</span> : ""}
                    {msg.type === 'error' ? <span style={{ color: "#ff0000" }}>{msg.message}</span> : ""}

                    <div className={styles.input_container}>

                        <input
                            type="email"
                            className="input_form"
                            placeholder="Digite aqui seu e-mail"
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            className="input_form"
                            placeholder="Digite aqui sua senha"
                            onChange={e => setPassword(e.target.value)}
                        />

                    </div>

                    <div className={styles.links}>
                        <a href="/">Esqueceu a senha?</a>
                        <p>Não possui uma conta? <a href="/register">Cadastre-se!</a></p>
                    </div>

                    <div className={styles.buttons}>
                        <button className="btn_traditional" type="submit">Entrar</button>

                        <p>ou</p>

                        <button className={styles.long_btn}>
                            <img src={LinkedIn} alt="LinkedInd" />
                            Entrar com LinkedIn
                        </button>

                        <button className={styles.long_btn}>Entrar com Google</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login