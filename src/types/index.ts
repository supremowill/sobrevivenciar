export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Project {
  id: string
  title: string
  description: string
  status: 'active' | 'completed' | 'pending'
  createdAt: Date
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}