const noticeReducer = (
    state = { notices: [], loading: false, error: false, uploading: false },
    action
) => {
    switch (action.type) {
        //Articles/create index.jsx
        case "UPLOAD_ARTICLE_START":
            return { ...state, error: false, uploading: true };
        case "UPLOAD_ARTICLE_SUCCESS":
            return { ...state, notices: [action.data, ...state.notices], uploading: false, error: false };
        case "UPLOAD_ARTICLE_FAIL":
            return { ...state, uploading: false, error: true };
        default:
            return state
    }
}

export default noticeReducer