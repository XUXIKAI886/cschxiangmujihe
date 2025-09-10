'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'
import { CategoryFilter } from '@/components/category-filter'
import { projects, categories } from '@/data/projects'

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects

  return (
    <div className="container mx-auto px-4 py-8">

      {/* Category Filter */}
      <section className="mb-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </section>

      {/* Projects Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">该分类下暂无项目</p>
          </div>
        )}
      </section>

    </div>
  )
}
