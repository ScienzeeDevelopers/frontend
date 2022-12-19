import * as UploadApi from '../api/UploadRequest.js';

export const uploadFileArticle = (data) => async (dispatch) => {
    try {
        await UploadApi.uploadFileArticle(data)
    } catch (error) {
        console.log(error)
        return error.response.data.message
    }
}

export const uploadArticle = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_ARTICLE_START" })
    try {
        const newArticle = await UploadApi.uploadArticle(data)
        dispatch({ type: "UPLOAD_ARTICLE_SUCCESS", data: newArticle.data })
    } catch (error) {
        dispatch({ type: "UPLOAD_ARTICLE_FAIL", error: error })
        return error.response.data.message
    }
}

export const uploadFileNotice = (data) => async (dispatch) => {
    try {
        await UploadApi.uploadFileNotice(data)
    } catch (error) {
        return error.response.data.message
    }
}

export const uploadImageNotice = (data) => async (dispatch) => {
    try {
        await UploadApi.uploadImageNotice(data)
    } catch (error) {
        console.log(error)
    }
}


export const uploadNotice = (data) => async (dispatch) => {
    dispatch({ type: "UPLOAD_NOTICE_START" })
    try {
        const newNotice = await UploadApi.uploadNotice(data)
        dispatch({ type: "UPLOAD_NOTICE_SUCCESS", data: newNotice.data })
    } catch (error) {
        dispatch({ type: "UPLOAD_NOTICE_FAIL", error: error })
        console.log(error)
        return error.response.data.message

    }
}