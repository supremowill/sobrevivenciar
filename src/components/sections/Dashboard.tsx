import React from 'react'
import { Card, CardHeader, CardContent } from '../ui/Card'
import { useAppContext } from '../../contexts/AppContext'
import { Button } from '../ui/Button'

export const Dashboard: React.FC = () => {
  const { stats, updateStats } = useAppContext()

  const handleIncrement = (key: keyof typeof stats) => {
    updateStats(key, stats[key] + 1)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our modular state management in action
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Users</h3>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                {stats.users.toLocaleString()}
              </div>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => handleIncrement('users')}
              >
                Add User
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-4">
                {stats.projects.toLocaleString()}
              </div>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => handleIncrement('projects')}
              >
                Add Project
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Downloads</h3>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-4">
                {stats.downloads.toLocaleString()}
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleIncrement('downloads')}
              >
                Add Download
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}