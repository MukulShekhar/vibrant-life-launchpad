import React from 'react'
import { Navigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { toast } from '@/hooks/use-toast'
import { 
  Calendar, 
  User, 
  FileText, 
  Settings, 
  LogOut,
  Activity,
  Clock,
  Shield
} from 'lucide-react'

const Dashboard = () => {
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

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      })
    } else {
      toast({
        title: "Signed out",
        description: "You have been successfully signed out",
      })
    }
  }

  const userRole = user.user_metadata?.role || 'patient'
  const firstName = user.user_metadata?.first_name || 'User'
  const lastName = user.user_metadata?.last_name || ''

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'doctor': return 'bg-blue-100 text-blue-800'
      case 'nurse': return 'bg-green-100 text-green-800'
      case 'admin': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">Health Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {firstName} {lastName}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge className={getRoleColor(userRole)}>
              {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
            </Badge>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile
              </CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Name:</strong> {firstName} {lastName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {userRole}</p>
                <p><strong>Status:</strong> 
                  <Badge variant="outline" className="ml-2">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Appointments Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Appointments
              </CardTitle>
              <CardDescription>Your upcoming appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">Dr. Smith</p>
                    <p className="text-sm text-muted-foreground">Cardiology</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Tomorrow</p>
                    <p className="text-xs text-muted-foreground">2:00 PM</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Clock className="h-4 w-4 mr-2" />
                  Book New Appointment
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Health Records Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Medical Records
              </CardTitle>
              <CardDescription>Your health information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Recent Lab Results</span>
                  <Badge variant="secondary">3 new</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Prescriptions</span>
                  <Badge variant="secondary">2 active</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  <Activity className="h-4 w-4 mr-2" />
                  View All Records
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common tasks and features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Calendar className="h-6 w-6" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <FileText className="h-6 w-6" />
                  Request Records
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <User className="h-6 w-6" />
                  Update Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Dashboard