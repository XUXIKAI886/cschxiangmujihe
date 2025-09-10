'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Project } from '@/types/project'
import { Calendar, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

const statusColors = {
  active: 'bg-green-100 text-green-800',
  development: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-blue-100 text-blue-800'
}

const statusLabels = {
  active: '运行中',
  development: '开发中',
  completed: '已完成'
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <Badge className={statusColors[project.status]}>
            {statusLabels[project.status]}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <Link
            href={project.url}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </Link>
        </div>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>更新于 {new Date(project.updatedAt).toLocaleDateString('zh-CN')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
