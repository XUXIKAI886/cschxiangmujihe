import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Target, Lightbulb, Award } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: '专业专注',
      description: '专注于产品策划与开发，为客户提供专业的技术解决方案'
    },
    {
      icon: Lightbulb,
      title: '创新驱动',
      description: '持续关注新技术趋势，将创新理念融入到每一个项目中'
    },
    {
      icon: Users,
      title: '团队协作',
      description: '拥有经验丰富的开发团队，注重团队协作和知识分享'
    },
    {
      icon: Award,
      title: '品质保证',
      description: '严格的质量控制流程，确保每个项目都达到高标准要求'
    }
  ]

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Vue.js',
    'React Native', 'Flutter', 'PostgreSQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes', 'AWS', 'Vercel', 'Firebase'
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          关于呈尚策划
        </h1>
        <p className="text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          我们是一家专注于产品策划与开发的创新型公司，致力于为客户提供高质量的数字化解决方案。
          通过结合前沿技术与创意设计，我们帮助企业实现数字化转型，提升竞争力。
        </p>
      </section>

      {/* Company Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">我们的价值观</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">技术栈</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们掌握并使用业界领先的技术栈，确保项目的技术先进性和可维护性
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-sm py-2 px-4">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Company Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">我们的故事</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                呈尚策划成立于数字化浪潮兴起的时代，我们深知技术对企业发展的重要性。
                从创立之初，我们就致力于为客户提供最优质的产品策划与开发服务。
              </p>
              <p>
                多年来，我们积累了丰富的项目经验，涵盖Web应用、移动应用、企业管理系统、
                电商平台等多个领域。我们始终坚持以客户需求为导向，以技术创新为驱动力。
              </p>
              <p>
                未来，我们将继续专注于技术创新和服务质量的提升，为更多的客户创造价值，
                成为值得信赖的技术合作伙伴。
              </p>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">成功项目</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">30+</h3>
                <p className="text-muted-foreground">合作客户</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">5年</h3>
                <p className="text-muted-foreground">行业经验</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
                <p className="text-muted-foreground">客户满意度</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
