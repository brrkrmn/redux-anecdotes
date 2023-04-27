import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"
import Filter from "./components/Filter"
import Notification from "./components/Notification"

const App = () => {
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