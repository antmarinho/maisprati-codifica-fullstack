import './App.css'
import DeleteUser from './components/DeleteUser'
import GetUser from './components/GetUser'
import PutUser from './components/PutUser'
import UserForm from './components/UserForm'

function App() {

  

  return (
    <>
     <UserForm/>
     <GetUser/>
     <PutUser/>
     <DeleteUser/>
    </>
  )
}

export default App
