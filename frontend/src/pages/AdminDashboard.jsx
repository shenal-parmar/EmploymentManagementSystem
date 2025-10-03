import React, { use, useEffect } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const {user} = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
     {(!user) && navigate('/login') }
  }, [])
  
  return (
    <div>
      AdminDashboard {user}
      </div>
  )
}

export default AdminDashboard