import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireRole?: string[]
}

const ProtectedRoute = ({ children, requireRole }: ProtectedRouteProps) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (requireRole && requireRole.length > 0) {
    const userRole = user.user_metadata?.role
    if (!requireRole.includes(userRole)) {
      return <Navigate to="/dashboard" replace />
    }
  }

  return <>{children}</>
}

export default ProtectedRoute