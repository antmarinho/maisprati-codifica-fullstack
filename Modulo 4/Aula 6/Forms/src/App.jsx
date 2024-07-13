import { useState } from 'react'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import Forms from './components/Forms'
import UserCards from './components/UserCards'

function App() {

  const [user, setUser] = useState({name: 'gandalf', age: 1000})

  return (
    <>
      {/* <Forms/> */}
      {/* <Form2/> */}
      {/* <Form3/> */}
      <UserCards user={user} setUser={setUser}></UserCards>
    </>
  )
}

export default App
