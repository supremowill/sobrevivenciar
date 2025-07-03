import React from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { MainContent } from './components/layout/MainContent'
import { AppProvider } from './contexts/AppContext'

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </AppProvider>
  )
}

export default App