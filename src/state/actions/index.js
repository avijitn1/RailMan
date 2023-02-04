export const login = (user) => {
    return (dispatch) => {
        dispatch({
            type: "login",
            payload: user
        })
    }
}

export const logout = (user) => {
    return (dispatch) => {
        dispatch({
            type: "logout",
            payload: user
        })
    }
}

export const addOrder = (content) => {
    return (dispatch) => {
        dispatch({
            type: "addOrder",
            payload: content
        })
    }
}

export const delOrder = (content) => {
    return (dispatch) => {
        dispatch({
            type: "delOrder",
            payload: content
        })
    }
}
