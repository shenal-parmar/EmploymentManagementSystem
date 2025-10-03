import React from 'react'
import { useAuth } from '../context/AuthContext'

const UserDashboard = () => {
  const user = useAuth()
  console.log(user.name);
  
  return (
    <div>UserDashboard {user.name}</div>
  )
}

export default UserDashboard