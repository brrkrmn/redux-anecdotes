import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { showNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(showNotification(`'${content}' is added.`, 3))
    }

    return(
        <>
            <h2>Create New</h2>
            <form onSubmit={addAnecdote}>
                <input name='anecdote' minLength={3}/>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm