import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./CreateNotice.module.css";
import { uploadFileNotice, uploadImageNotice, uploadNotice } from "../../../actions/uploadAction.js";
import "../Notices.css";


import Image from "../../../assets/imagens/CreateNotice.svg"
import NavigatePage from "../../../components/NavigateToNotice/NavigatePage"
import JoditEditor from "jodit-react"


const CreateNotice = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  const editoRef = useRef(null);
  const [content, setContent] = useState("");
  const [theme, setTheme] = useState("")
  const [getSearchArea, setGetSearchArea] = useState([])
  const [searchArea, setSearchArea] = useState()
  const [getStates, setGetStates] = useState([])
  const [states, setStates] = useState()
  const [institution, setInstitution] = useState("")
  const [locality, setlocality] = useState()
  const [duration, setDuration] = useState()
  const [openIn, setOpenIn] = useState("")
  const [closeIn, setCloseIn] = useState("")
  const [file, setFile] = useState()
  const [dataFile, setDataFile] = useState()
  const [image, setImage] = useState()
  const [dataImg, setDataImg] = useState()
  const [msg, setMsg] = useState({
    type: '',
    message: ''
  });

  const config = {
    readonly: false,
    heigth: 230,
  };

  const resetMsg = () => {
    setMsg({
      type: '',
      message: ''
    })
  }

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

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let uploadFile = e.target.files[0]
      const extVerify = (file) => {
        const extAllowed = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.tiff', '.tif', '.pjp', '.pjpeg', '.jfif']
        const fileExt = file.name.split('.').pop()
        if (extAllowed.includes('.' + fileExt)) {
          setImage(uploadFile)
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
    const newNotice = {
      userId: user._id,
      theme: theme,
      searchArea: searchArea,
      institution: institution,
      locality: states,
      duration: 1,
      openIn: openIn,
      closeIn: closeIn,
      description: content
    }
    if (file) {
      const data = new FormData()
      const filename = "Edital" + Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newNotice.file = filename
      console.log(newNotice)
      setDataFile(data)
      if (image) {
        const dataImg = new FormData()
        const imagename = "Edital" + Date.now() + image.name
        dataImg.append("name", imagename)
        dataImg.append("image", image)
        newNotice.img = imagename
        setDataImg(dataImg)
      }
    }
    dispatch(uploadNotice(newNotice))
      .then(res => res)
      .then(res => {
        if (res) {
          throw Error(res)
        } else {
          resetMsg()
          //If there is no error, send the file
          dispatch(uploadFileNotice(dataFile))
          dispatch(uploadImageNotice(dataImg))
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


  const handleCancel = () => {
    setContent("");
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
    console.log(searchArea)
  }

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get("http://localhost:5000/states")
        setGetStates(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAPI()
  }, [])

  const handleStates = (e) => {
    setStates(e.target.value)
    console.log(states)
  }

  return (
    <div>
      <NavigatePage />
      <div className="main">
        <div className={styles.create_container}>
          <p>
            <Link to="/">Rascunhos (1)</Link>
          </p>
          <div className={styles.body}>
            <form className={styles.form}>
              <div className={styles.contentFormContainer}>
                <div className={styles.fileImageContainer}>
                  <label className={styles.fileImage}>
                    <img src={Image} alt="Imagem do edital" />
                    <input
                      type="file"
                      accept="image/png, image/gif, image/svg, image/webp, image/tiff, image/jpeg"
                      onChange={onImageChange}
                    />
                  </label>
                </div>

                <div className={styles.info_container}>
                  {msg.type === 'success' ? <span style={{ color: "green" }}>{msg.message}</span> : ""}
                  {msg.type === 'error' ? <span style={{ color: "#ff0000" }}>{msg.message}</span> : ""}
                  <label>
                    <input
                      type="text"
                      placeholder="Tema:"
                      onChange={e => setTheme(e.target.value)}
                      value={theme}
                    />
                  </label>
                  <label className={styles.select}>
                    Área de pesquisa:
                    <select
                      onChange={handleSeatchArea}
                    >
                      <option></option>
                      {getSearchArea.map((option) => (
                        <option
                          value={option.id}
                          key={option.id}
                          onChange={e => setSearchArea(e.target.value)}
                        >
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <input
                      type="text"
                      placeholder="Instituição:"
                      onChange={e => setInstitution(e.target.value)}
                      value={institution}
                    />
                  </label>
                  <label className={styles.select}>
                    Localidade:
                    <select
                      onChange={handleStates}
                    >
                      <option></option>
                      {getStates.map((option) => (
                        <option
                          value={option.id}
                          key={option.id}
                        >
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  {/* <label>
                    <input
                      type="text"
                      placeholder="Duração:"
                      onChange={e => setDuration(e.target.value)}
                      value={duration}
                    />
                  </label> */}
                  <label>
                    <input
                      type="text"
                      placeholder="Esse edital abre em:"
                      onChange={e => setOpenIn(e.target.value)}
                      value={openIn}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      placeholder="Encerra em:"
                      onChange={e => setCloseIn(e.target.value)}
                      value={closeIn}
                    />
                  </label>
                </div>

                <div className={styles.container_uploadFile}>
                  <div className={styles.uploadFile}>
                    <label>
                      Fazer upload do edital
                      <input
                        accept=".pdf"
                        type="file"
                        onChange={onFileChange}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.desc_container}>
                <p>Descrição:</p>
                <div className={styles.description}>
                  <JoditEditor
                    ref={editoRef}
                    value={content}
                    config={config}
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={(newContent) => { }}
                  />
                </div>
              </div>

              <div className={styles.btn_container}>
                <button className={styles.cancel_btn} onClick={handleCancel}>
                  Cancelar
                </button>
                <button
                  onClick={handleSubmit}
                  className="btn_traditional"
                  type="submit"
                >
                  Anunciar Edital
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNotice;
