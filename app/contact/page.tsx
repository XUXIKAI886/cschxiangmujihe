import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: '邮箱联系',
      content: 'contact@csch.com',
      description: '我们会在24小时内回复您的邮件'
    },
    {
      icon: Phone,
      title: '电话咨询',
      content: '+86 138-0000-0000',
      description: '工作时间内可直接拨打咨询'
    },
    {
      icon: MapPin,
      title: '公司地址',
      content: '北京市朝阳区创新大厦',
      description: '欢迎预约到访洽谈合作'
    },
    {
      icon: Clock,
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      description: '节假日可通过邮件联系'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          联系我们
        </h1>
        <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          有任何项目需求或合作意向，欢迎随时与我们联系。
          我们的专业团队将为您提供最优质的服务和解决方案。
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">{info.content}</p>
                <CardDescription>{info.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">发送消息</CardTitle>
              <CardDescription className="text-center">
                填写下面的表单，我们会尽快与您取得联系
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    公司名称
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="请输入您的公司名称（选填）"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    主题 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="请输入消息主题"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    消息内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="请详细描述您的需求或问题..."
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  发送消息
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted/50 rounded-lg py-16">
        <h2 className="text-3xl font-bold mb-4">准备开始您的项目？</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          无论您是需要全新的Web应用、移动应用，还是现有系统的优化升级，
          我们都能为您提供专业的解决方案。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            <Mail className="mr-2 h-4 w-4" />
            立即咨询
          </Button>
          <Button variant="outline" size="lg">
            <Phone className="mr-2 h-4 w-4" />
            电话联系
          </Button>
        </div>
      </section>
    </div>
  )
}
