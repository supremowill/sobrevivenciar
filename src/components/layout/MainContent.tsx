import React from 'react'
import { Hero } from '../sections/Hero'
import { Features } from '../sections/Features'
import { Dashboard } from '../sections/Dashboard'

export const MainContent: React.FC = () => {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <Dashboard />
    </main>
  )
}