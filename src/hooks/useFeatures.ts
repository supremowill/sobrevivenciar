import { useState, useEffect } from 'react'

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

export const useFeatures = () => {
  const [features, setFeatures] = useState<Feature[]>([])

  useEffect(() => {
    // Simulate API call
    const mockFeatures: Feature[] = [
      {
        id: 1,
        title: 'Modular Architecture',
        description: 'Clean separation of concerns with reusable components and clear file organization.',
        icon: '🏗️'
      },
      {
        id: 2,
        title: 'TypeScript Support',
        description: 'Full TypeScript integration for better development experience and type safety.',
        icon: '📝'
      },
      {
        id: 3,
        title: 'Modern Styling',
        description: 'Beautiful UI built with Tailwind CSS and responsive design principles.',
        icon: '🎨'
      },
      {
        id: 4,
        title: 'State Management',
        description: 'Efficient state management using React Context and custom hooks.',
        icon: '⚡'
      },
      {
        id: 5,
        title: 'Performance Optimized',
        description: 'Built with Vite for fast development and optimized production builds.',
        icon: '🚀'
      },
      {
        id: 6,
        title: 'Developer Experience',
        description: 'Excellent DX with hot reload, ESLint, and modern tooling.',
        icon: '👨‍💻'
      }
    ]

    setFeatures(mockFeatures)
  }, [])

  return features
}