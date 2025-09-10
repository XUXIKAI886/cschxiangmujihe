import { Project, ProjectCategory } from '@/types/project'

export const categories: ProjectCategory[] = [
  {
    id: 'web-app',
    name: 'Web 应用',
    description: '现代化的 Web 应用程序',
    icon: 'Globe'
  },
  {
    id: 'mobile-app',
    name: '移动应用',
    description: '跨平台移动应用解决方案',
    icon: 'Smartphone'
  },
  {
    id: 'dashboard',
    name: '管理面板',
    description: '数据可视化和管理系统',
    icon: 'BarChart3'
  },
  {
    id: 'e-commerce',
    name: '电商平台',
    description: '在线商城和交易系统',
    icon: 'ShoppingCart'
  }
]

export const projects: Project[] = [
  {
    id: 'project-1',
    title: '智能办公管理系统',
    description: '一个现代化的办公管理平台，集成了项目管理、团队协作和数据分析功能。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    category: 'dashboard',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    url: '/projects/office-management',
    status: 'active',
    createdAt: '2024-01-15',
    updatedAt: '2024-03-10'
  },
  {
    id: 'project-2',
    title: '在线教育平台',
    description: '为学习者和教育者提供的综合性在线教育解决方案，支持视频课程、互动学习和进度追踪。',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    category: 'web-app',
    tags: ['Next.js', 'Prisma', 'Stripe', 'WebRTC'],
    url: '/projects/education-platform',
    status: 'development',
    createdAt: '2024-02-01',
    updatedAt: '2024-03-15'
  },
  {
    id: 'project-3',
    title: '移动健康助手',
    description: '帮助用户跟踪健康数据、制定锻炼计划和获得专业健康建议的移动应用。',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    category: 'mobile-app',
    tags: ['React Native', 'Firebase', 'HealthKit', 'AI'],
    url: '/projects/health-assistant',
    status: 'completed',
    createdAt: '2023-11-20',
    updatedAt: '2024-01-30'
  },
  {
    id: 'project-4',
    title: '智能电商平台',
    description: '集成AI推荐引擎的现代化电商平台，提供个性化购物体验和智能库存管理。',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    category: 'e-commerce',
    tags: ['Vue.js', 'Python', 'TensorFlow', 'Redis'],
    url: '/projects/smart-ecommerce',
    status: 'active',
    createdAt: '2024-01-05',
    updatedAt: '2024-03-12'
  }
]
