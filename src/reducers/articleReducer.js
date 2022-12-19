const articleReducer = (
    state = { articles: [], loading: false, error: false, uploading: false },
    action
) => {
    switch (action.type) {
        //Articles/create index.jsx
        case "UPLOAD_ARTICLE_START":
            return { ...state, error: false, uploading: true };
        case "UPLOAD_ARTICLE_SUCCESS":
            return { ...state, articles: [action.data, ...state.articles], uploading: false, error: false };
        case "UPLOAD_ARTICLE_FAIL":
            return { ...state, uploading: false, error: true };
        default:
            return state
    }
}

export default articleReducer