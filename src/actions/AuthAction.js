import * as AuthApi from '../api/AuthRequest.js'

export const logIn = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.logIn(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "AUTH_FAIL", error: error })
        return error.response.data.message
    }
}

export const register = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.register(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "AUTH_FAIL", error: error })
        // return console.log('erro:', error.response.data.message)
        return error.response.data.message
    }
}