export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  url: string
  status: 'active' | 'development' | 'completed'
  createdAt: string
  updatedAt: string
}

export interface ProjectCategory {
  id: string
  name: string
  description: string
  icon: string
}
