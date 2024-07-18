import './App.css'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Navigation from './components/Navigation'


function App() {

  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          {/* <Route path='/' Component={Home} />
          <Route path='/comp1' Component={Comp1} />
          <Route path='/comp2' Component={Comp2} /> */}
          <Route path='/' Component={Home} />
          <Route path='/comp1' Component={Comp1} />
          <Route path='/comp2' element={<Navigate to='/'/>} />
  
        </Routes>
      </Router>
    </>
  )
}

export default App

