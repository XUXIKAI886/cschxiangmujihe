'use client'

import { Button } from '@/components/ui/button'
import { ProjectCategory } from '@/types/project'
import { 
  Globe, 
  Smartphone, 
  BarChart3, 
  ShoppingCart,
  Grid3X3
} from 'lucide-react'

interface CategoryFilterProps {
  categories: ProjectCategory[]
  selectedCategory: string | null
  onCategoryChange: (categoryId: string | null) => void
}

const iconMap = {
  Globe,
  Smartphone,
  BarChart3,
  ShoppingCart
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedCategory === null ? 'default' : 'outline'}
        onClick={() => onCategoryChange(null)}
        className="flex items-center gap-2"
      >
        <Grid3X3 className="h-4 w-4" />
        全部项目
      </Button>
      
      {categories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap]
        
        return (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category.id)}
            className="flex items-center gap-2"
          >
            {Icon && <Icon className="h-4 w-4" />}
            {category.name}
          </Button>
        )
      })}
    </div>
  )
}
