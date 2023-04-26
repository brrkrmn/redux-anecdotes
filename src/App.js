import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"
import Filter from "./components/Filter"

const App = () => {
  return (
    <>
      <AnecdoteForm />  
      <Filter />
      <AnecdoteList />
    </>
  )
}

export default App