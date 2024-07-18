import { createContext, useContext, useState } from 'react'
import './App.css'
import { MyProvider } from './components/Contexto'
import Filho from './components/Filho'

// const ThemeContext = createContext({theme: 'light', toggleTheme: () => {}})
const PreferencesContext = createContext({theme: 'light', toggleTheme: () => {}})


function App() {

  // const [theme, setTheme] = useState('light')
  const [preferences, setPreferences] = useState({theme: 'light', language: 'en'})

  // const toggleTheme = () => {

  //   setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')

  // }

  const toggleTheme = () => {

    setPreferences(currentTheme => ({ 
      ...currentTheme, theme: currentTheme.theme === 'light' ? 'dark' : 'light'
    }))
  }

  const changeLanguage = (language) => {

    setPreferences(currentLanguage => ({
      ...currentLanguage, language: language
    }))

  }

  return (
    <>
    {/* <MyProvider>
      <Filho/>
    </MyProvider> */}
    {/* <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div>
        <Toolbar/>
        <button onClick={toggleTheme}>trocar</button>
      </div>
    </ThemeContext.Provider> */}
    <PreferencesContext.Provider value={{preferences,toggleTheme,changeLanguage}}>
      <div>
        <Toolbar/>
        <button onClick={toggleTheme}>trocar tema</button>
        <button onClick={() => changeLanguage('pt-br')}>br</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
    </PreferencesContext.Provider>
    </>
  )

  function Toolbar() {

    const { preferences } = useContext(PreferencesContext)

    return(
      <div style={{background: preferences.theme === 'dark' ? 'grey' : 'blue', color: preferences.theme === 'dark' ? 'white' : 'yellow'}}>
        tema utilizado  - {preferences.theme} ,
        lingua - {preferences.language}
      </div>
    )

  }

  // function Toolbar() {

  //   const { theme } = useContext(ThemeContext)

  //   return(
  //     <div style={{background: theme === 'dark' ? 'grey' : 'blue', color: theme === 'dark' ? 'white' : 'yellow'}}>
  //       tema utilizado  - {theme}
  //     </div>
  //   )

  // }

}

export default App
