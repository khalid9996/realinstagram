import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

const Profile = () => {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser.email)
  return (
    <div>Profile</div>
  )
}

export default Profile