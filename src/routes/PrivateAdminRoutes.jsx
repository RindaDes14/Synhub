import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

const PrivateAdminRoutes = ({ children }) => {
  const token = Cookies.get('token');
  const role = Cookies.get('role');

  if (!token) {
    return <Navigate to='/login' replace />
  }

  if (token && role == 'customer') {
    return <Navigate to='/' replace />
  }

  if (token && role == 'admin') {
    return children
  }
}

export default PrivateAdminRoutes