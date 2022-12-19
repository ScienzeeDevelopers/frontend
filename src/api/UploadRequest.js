import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })

export const uploadFileArticle = (data) => API.post('/upload/articles', data)
export const uploadArticle = (data) => API.post('/article/new', data)

export const uploadFileNotice = (data) => API.post('/upload/notices', data)
export const uploadImageNotice = (data) => API.post('/upload/noticesimg', data)
export const uploadNotice = (data) => API.post('/notice/new', data)