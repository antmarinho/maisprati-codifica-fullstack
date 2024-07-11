import React, { useEffect, useState } from 'react'

const User = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        
        const fetchUserData = async () => {

            const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
            const userData = await response.json()

            setUser(userData)
        }

        fetchUserData()

        return () => setUser(null)

    },[])

  return (
    <div>
        {user ? (
            <div>
                <h1>{user.name}</h1>
                <h1>{user.email}</h1>
            </div>
        ) : (
            <p>carregando usuario</p>
        )}
    </div>
  )

}

export default User