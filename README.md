# 呈尚策划 - 产品展示集合

一个现代化的产品展示平台，用于展示呈尚策划公司的各种项目和解决方案。

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui
- **图标**: Lucide React
- **部署**: GitHub Actions + Vercel

## 📁 项目结构

```
csch-showcase/
├── app/                    # Next.js App Router 页面
│   ├── about/             # 关于我们页面
│   ├── contact/           # 联系我们页面
│   ├── projects/          # 项目详情页面
│   │   └── [slug]/        # 动态路由
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页
├── components/            # React 组件
│   ├── ui/               # 基础 UI 组件
│   ├── category-filter.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   └── project-card.tsx
├── data/                 # 数据文件
│   └── projects.ts       # 项目数据
├── lib/                  # 工具函数
│   └── utils.ts
├── types/                # TypeScript 类型定义
│   └── project.ts
└── public/               # 静态资源
    └── images/
```

## 🛠️ 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建项目

```bash
npm run build
```

### 启动生产服务器

```bash
npm run start
```

## 📝 添加新项目

1. 在 `data/projects.ts` 中添加新的项目数据
2. 确保项目图片已上传到合适的位置
3. 根据需要添加新的项目分类

### 项目数据结构

```typescript
interface Project {
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
```

## 🎨 自定义样式

项目使用 Tailwind CSS 进行样式设计，主要的设计令牌定义在 `app/globals.css` 中。

### 主要颜色变量

- `--primary`: 主色调
- `--secondary`: 次要颜色
- `--background`: 背景色
- `--foreground`: 前景色

## 📱 响应式设计

项目采用移动优先的响应式设计：

- **移动设备**: 单列布局
- **平板设备**: 双列布局
- **桌面设备**: 三列布局

## 🚀 部署

项目配置了 GitHub Actions 自动部署到 Vercel：

1. 将代码推送到 `main` 分支
2. GitHub Actions 自动运行构建和部署流程
3. 部署完成后可通过 Vercel 提供的 URL 访问

### 环境变量

需要在 GitHub Secrets 中配置以下变量：

- `VERCEL_TOKEN`: Vercel 访问令牌
- `VERCEL_ORG_ID`: Vercel 组织 ID
- `VERCEL_PROJECT_ID`: Vercel 项目 ID

## 🔧 代码质量

项目遵循严格的代码质量标准：

- **文件规模**: 每个文件不超过 200 行
- **目录结构**: 每个目录最多 8 个文件
- **代码规范**: 使用 ESLint 进行代码检查
- **类型安全**: 使用 TypeScript 确保类型安全

## 📖 使用指南

### 添加新的 UI 组件

1. 在 `components/ui/` 目录下创建新组件
2. 遵循 shadcn/ui 的设计规范
3. 使用 `cn()` 函数合并 CSS 类名

### 添加新页面

1. 在 `app/` 目录下创建新的页面文件
2. 使用 TypeScript 和 React Server Components
3. 遵循 Next.js App Router 的约定

### 修改主题

1. 编辑 `app/globals.css` 中的 CSS 变量
2. 更新 `tailwind.config.js` 中的主题配置
3. 确保暗色模式的兼容性

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 📞 联系我们

- 邮箱: contact@csch.com
- 电话: +86 138-0000-0000
- 地址: 北京市朝阳区创新大厦

---

© 2024 呈尚策划公司. 保留所有权利.
