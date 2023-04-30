import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        hideNotification(state, action) {
            return ''
        }
    }
})

export const showNotification = (content, seconds) => {
    return async dispatch => {
        dispatch(setNotification(content))
        const duration = seconds * 1000
        setTimeout(() => {
            dispatch(hideNotification())
        }, duration)
    }
}

export const { setNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer