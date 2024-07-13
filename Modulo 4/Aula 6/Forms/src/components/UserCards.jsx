import React from 'react'
import UserProfile from './UserProfile'

const UserCards = ({user, setUser}) => {
    
  return (
    <div>
        <UserProfile user={user} setUser={setUser}></UserProfile>
    </div>
  )
}

export default UserCards