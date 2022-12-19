import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import Select from "../../components/Select/Select";
import { useDispatch } from "react-redux"
import axios, { Axios, AxiosError } from "axios"

import styles from "./Register.module.css"
//image
import Scienzee from "../../assets/Scienzee.svg"
import { register } from "../../actions/AuthAction";

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //category logic
    const [category, setCategory] = useState("PF")
    const [pf, setPF] = useState("color")
    const [pj, setPJ] = useState("")

    //states of buttons
    const [userType, setUserType] = useState(1) //1 para PF, 2 para PJ
    const [name, setName] = useState("")
    const [date, setDate] = useState()
    const [email, setEmail] = useState("")
    // const [country, setCountry] = useState()
    // const [categoriesCountry, setCategoriesCountry] = useState([])
    const [categoriesState, setCategoriesState] = useState([])
    const [state, setState] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [agreement, setAgreement] = useState(false) //false para não aceito, true para aceito


    const [msg, setMsg] = useState({
        type: '',
        message: ''
    });

    const handleCategory = (e) => {
        const selected = e.target.textContent
        if (selected == "Pessoa Física") {
            setCategory("PF")
            setPJ("")
            setPF("color")
            setUserType(1)

        } else if (selected == "Pessoa Jurídica") {
            setCategory("")
            setPF("")
            setPJ("color")
            setUserType(2)
        }
    }

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await axios.get("http://localhost:5000/states")
                setCategoriesState(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAPI()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: name,
            date: date,
            email: email,
            state: state,
            country: 1,
            password: password,
            confirmPassword: confirmPassword,
            userType: userType,
            agreement: agreement
        };
        dispatch(register(data))
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
    const handleCategoryState = (e) => {
        setState(e.target.value)
    }

    return (
        <div className={styles.container}>

            <a href="/">
                <img className={styles.logo} src={Scienzee} alt="Scienzee" />
            </a>

            <div className={styles.selected_category}>

                <p className={pf} onClick={handleCategory}>Pessoa Física</p>
                <p className={pj} onClick={handleCategory}>Pessoa Jurídica</p>

            </div>

            <div className={styles.form_container}>

                <form className={styles.form} onSubmit={handleSubmit}>
                    {msg.type === 'success' ? <span style={{ color: "green" }}>{msg.message}</span> : ""}
                    {msg.type === 'error' ? <span style={{ color: "#ff0000" }}>{msg.message}</span> : ""}
                    {
                        category == "PF" ?
                            <div className={styles.pf_container}>
                                <div className={styles.names}>
                                    <label className={styles.name}>
                                        Nome:
                                        <input
                                            type="text"
                                            className="input_form"
                                            onChange={e => setName(e.target.value)}
                                            value={name}
                                        />
                                    </label>

                                    <label>
                                        Data de Nascimento:
                                        <input
                                            type="date"
                                            className="input_form"
                                            onChange={e => setDate(e.target.value)}
                                            value={date}
                                        />
                                    </label>
                                </div>
                            </div>
                            :
                            <div className={styles.pj_container}>
                                <div className={styles.names}>
                                    <label className={styles.name_Pj}>
                                        Nome da instituição:
                                        <input
                                            type="text"
                                            className="input_form"
                                            onChange={e => setName(e.target.value)}
                                            value={name}
                                        />
                                    </label>

                                    <label>
                                        Data de criação:
                                        <input
                                            type="date"
                                            className="input_form"
                                            onChange={e => setDate(e.target.value)}
                                            value={date}
                                        />
                                    </label>
                                </div>
                            </div>
                    }

                    <div className={styles.inputs_container}>
                        <label>
                            Email
                            <input
                                type="text"
                                className="input_form"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </label>
                        <label>
                            Estado
                            <Select
                                name="category_id"
                                className="input_form"
                                text=""
                                options={categoriesState}
                                handleOnChange={handleCategoryState}
                                value={state}
                            />
                        </label>
                        {/* <label>
                            País
                            <Select
                                name="category_id"
                                className="input_form"
                                text=""
                                options={categoriesCountry}
                                handleOnChange={handleCategoryCountry}
                                value={country}
                            />
                        </label> */}
                        <label>
                            Senha
                            <input
                                type="password"
                                className="input_form"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </label>
                        <label>
                            Confirmar senha
                            <input
                                type="password"
                                className="input_form"
                                onChange={e => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                            />
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={agreement}
                                onChange={() => setAgreement((prev) => !prev)}
                            />
                            Eu concordo com todos os <a href="/">termos de uso</a>
                        </label>
                    </div>

                    <button type="submit" className="btn_traditional">Cadastrar</button>
                </form>

            </div >
        </div >
    )
}

export default Register
