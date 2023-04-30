import React from "react"
import { useDispatch } from "react-redux"

import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"
import Filter from "./components/Filter"
import Notification from "./components/Notification"

import { initializeAnecdotes } from "./reducers/anecdoteReducer"

const App = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  
  return (
    <>
      <Notification />
      <AnecdoteForm />  
      <Filter />
      <AnecdoteList />
    </>
  )
}

export default App