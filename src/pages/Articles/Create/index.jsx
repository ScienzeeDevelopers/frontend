import NavigatePages from "../components/NavigatePages";
import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";

import Select from "../../../components/Select/Select";
import styles from "./Create.module.css";
import { uploadArticle, uploadFileArticle } from "../../../actions/uploadAction.js";





const Create = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  const [title, setTitle] = useState("")
  const [getSearchArea, setGetSearchArea] = useState([])
  const [searchArea, setSearchArea] = useState()
  const [summary, setSummary] = useState("")
  const [file, setFile] = useState()
  const [dataFile, setDataFile] = useState()
  const fileRef = useRef()

  const [msg, setMsg] = useState({
    type: '',
    message: ''
  });

  const resetMsg = () => {
    setMsg({
      type: '',
      message: ''
    })
  }

  // Verify and set upload file
  const onFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let uploadFile = e.target.files[0]
      const extVerify = (file) => {
        const extAllowed = ['.pdf']
        const fileExt = file.name.split('.').pop()
        if (extAllowed.includes('.' + fileExt)) {
          setFile(uploadFile)
          resetMsg()
        } else {
          setFile('')
          setMsg({
            type: 'error',
            message: 'Erro: Arquivo inválido'
          })
        }
      }
      extVerify(uploadFile)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      userId: user._id,
      title: title,
      searchArea: searchArea,
      summary: summary
    }
    // Set filename
    if (file) {
      const data = new FormData()
      const filename = "Artigo" + Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newArticle.file = filename
      setDataFile(data)
    }
    dispatch(uploadArticle(newArticle))
      .then(res => res)
      .then(res => {
        if (res) {
          throw Error(res)
        } else {
          resetMsg()
          //If there is no error, send the file
          dispatch(uploadFileArticle(dataFile))
        }
      })
      .catch((err) => {
        //if there is an error, show it to the user
        setMsg({
          type: 'error',
          message: err.message
        })
      })
  };


  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get("http://localhost:5000/searcharea")
        setGetSearchArea(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAPI()
  }, [])

  const handleSeatchArea = (e) => {
    setSearchArea(e.target.value)
  }

  return (
    <div className="container_articles">
      <NavigatePages />

      <div className="main_container">
        <form onSubmit={handleSubmit} className={styles.container}>
          {msg.type === 'success' ? <span style={{ color: "green" }}>{msg.message}</span> : ""}
          {msg.type === 'error' ? <span style={{ color: "#ff0000" }}>{msg.message}</span> : ""}
          <div className={styles.inputs_container}>
            <div className={styles.inputs}>
              <input
                type="text"
                placeholder="Título:"
                onChange={e => setTitle(e.target.value)}
                value={title}
              />
              <label>
                Área de pesquisa:
                <Select
                  name="category_id"
                  className={styles.select}
                  text=""
                  options={getSearchArea}
                  handleOnChange={handleSeatchArea}
                  value={searchArea}
                />
              </label>
            </div>
            <div className={styles.upload}>
              <div className={styles.upload_container}>
                <label>
                  Fazer upload do arquivo
                  <input
                    type="file"
                    accept=".pdf"
                    ref={fileRef}
                    onChange={onFileChange}

                  />
                </label>
              </div>
              <div className={styles.upload_container_filename}>
                {file !== undefined && (<p >{file.name}</p>)}
              </div>
            </div>

          </div>
          <label className={styles.texarea_container}>
            Resumo:
            <textarea
              placeholder="Escreva aqui um resumo"
              onChange={e => setSummary(e.target.value)}
              value={summary}
            ></textarea>
          </label>
          <button
            onClick={handleSubmit}
            className={styles.button}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
