import './App.css'
import Props from './components/Props'

const item = {
  author: "jaques",
  book: 'lalala'
}

function App() {
  
  return (
    <>
      <Props props={item} />
    </>
  )

}

export default App
