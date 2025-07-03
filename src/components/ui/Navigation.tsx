import React from 'react'
import { Button } from './Button'

export const Navigation: React.FC = () => {
  const navItems = ['Home', 'About', 'Services', 'Contact']

  return (
    <nav className="flex items-center space-x-8">
      <ul className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <Button variant="primary" size="sm">
        Get Started
      </Button>
    </nav>
  )
}