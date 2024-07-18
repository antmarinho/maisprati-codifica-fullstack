import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route
          path='/Home'
          element={
            <ProtectedRoute isLoggedIn={false}>
              <Home/>
            </ProtectedRoute>
          }
        />
      </Routes>
     </Router>
    </>
  )
}

export default App
