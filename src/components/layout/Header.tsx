import React from 'react'
import { Navigation } from '../ui/Navigation'
import { Logo } from '../ui/Logo'

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  )
}