import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Stats {
  users: number
  projects: number
  downloads: number
}

interface AppContextType {
  stats: Stats
  updateStats: (key: keyof Stats, value: number) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [stats, setStats] = useState<Stats>({
    users: 1250,
    projects: 89,
    downloads: 15420
  })

  const updateStats = (key: keyof Stats, value: number) => {
    setStats(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <AppContext.Provider value={{ stats, updateStats }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}