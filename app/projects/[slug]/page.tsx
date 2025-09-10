import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/data/projects'
import { ArrowLeft, Calendar, ExternalLink, Github } from 'lucide-react'

interface ProjectPageProps {
  params: {
    slug: string
  }
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

export default function ProjectPage({ params }: ProjectPageProps) {
  // 在实际应用中，这里应该根据 slug 从数据库或 API 获取项目数据
  // 现在我们根据 URL 路径来匹配项目
  const project = projects.find(p => p.url.includes(params.slug))
  
  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            返回项目列表
          </Button>
        </Link>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{project.description}</p>
          </div>
          <Badge className={statusColors[project.status]}>
            {statusLabels[project.status]}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-8">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>项目详情</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">项目概述</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description} 这个项目展示了我们在现代Web开发技术栈方面的专业能力，
                  采用了最新的技术标准和最佳实践，确保项目的可维护性、可扩展性和性能优化。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">技术特性</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 响应式设计，支持多设备访问</li>
                  <li>• 现代化的用户界面和用户体验</li>
                  <li>• 高性能优化和SEO友好</li>
                  <li>• 安全可靠的数据处理</li>
                  <li>• 可扩展的架构设计</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">项目亮点</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 采用最新的技术栈进行开发</li>
                  <li>• 遵循最佳实践和代码规范</li>
                  <li>• 完善的测试覆盖和质量保证</li>
                  <li>• 持续集成和自动化部署</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          {/* Project Info */}
          <Card>
            <CardHeader>
              <CardTitle>项目信息</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>创建时间: {new Date(project.createdAt).toLocaleDateString('zh-CN')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>更新时间: {new Date(project.updatedAt).toLocaleDateString('zh-CN')}</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>快速链接</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <Link href="#" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  查看在线演示
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  查看源代码
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          {/* Tech Stack */}
          <Card>
            <CardHeader>
              <CardTitle>技术栈</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
