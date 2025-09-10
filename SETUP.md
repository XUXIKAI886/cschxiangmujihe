# 项目设置指南

## 快速开始

### 1. 克隆项目

```bash
git clone <repository-url>
cd csch-showcase
```

### 2. 安装依赖

```bash
npm install
```

如果遇到依赖安装问题，可以尝试：

```bash
npm install --legacy-peer-deps
```

### 3. 启动开发服务器

```bash
npm run dev
```

项目将在 [http://localhost:3000](http://localhost:3000) 启动。

## 项目框架特性

### 🏗️ 架构设计

- **模块化组件**: 每个组件都有明确的职责和接口
- **类型安全**: 完整的 TypeScript 类型定义
- **响应式设计**: 移动优先的响应式布局
- **可扩展性**: 易于添加新项目和功能

### 📱 核心功能

1. **项目展示**: 卡片式项目展示，支持分类筛选
2. **项目详情**: 详细的项目信息页面
3. **分类管理**: 灵活的项目分类系统
4. **响应式布局**: 适配各种设备屏幕

### 🎨 设计系统

- **统一的设计语言**: 基于 shadcn/ui 的设计系统
- **主题支持**: 支持亮色和暗色主题
- **图标系统**: 使用 Lucide React 图标库
- **动画效果**: 流畅的交互动画

## 添加新项目

### 1. 准备项目数据

在 `data/projects.ts` 中添加新项目：

```typescript
{
  id: 'new-project',
  title: '新项目名称',
  description: '项目描述',
  image: 'https://example.com/image.jpg',
  category: 'web-app',
  tags: ['React', 'TypeScript'],
  url: '/projects/new-project',
  status: 'active',
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01'
}
```

### 2. 添加项目分类（可选）

如需新分类，在 `data/projects.ts` 的 `categories` 数组中添加：

```typescript
{
  id: 'new-category',
  name: '新分类',
  description: '分类描述',
  icon: 'IconName'
}
```

### 3. 创建项目详情页

项目详情页会自动根据路由生成，无需额外配置。

## 自定义主题

### 1. 修改颜色变量

编辑 `app/globals.css` 中的 CSS 变量：

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* 其他变量... */
}
```

### 2. 更新 Tailwind 配置

在 `tailwind.config.js` 中添加自定义样式：

```javascript
theme: {
  extend: {
    // 自定义配置
  }
}
```

## 部署配置

### Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 配置环境变量（如需要）
3. 部署会自动触发

### GitHub Actions

项目已配置自动部署，需要设置以下 Secrets：

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID` 
- `VERCEL_PROJECT_ID`

## 开发最佳实践

### 1. 组件开发

- 使用 TypeScript 定义 props 接口
- 遵循单一职责原则
- 保持组件文件小于 200 行

### 2. 样式规范

- 优先使用 Tailwind 工具类
- 使用 `cn()` 函数合并类名
- 保持样式的一致性

### 3. 代码质量

- 运行 `npm run lint` 检查代码
- 使用有意义的变量和函数名
- 添加必要的注释

## 故障排除

### 常见问题

1. **依赖安装失败**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **TypeScript 错误**
   ```bash
   npm run build
   ```

3. **样式不生效**
   - 检查 Tailwind 配置
   - 确认 CSS 文件正确导入

### 获取帮助

- 查看项目 README
- 提交 GitHub Issue
- 联系开发团队

## 后续扩展

这个框架支持以下扩展：

- 添加用户认证系统
- 集成内容管理系统
- 添加搜索功能
- 集成分析工具
- 添加多语言支持

每个新项目都可以基于这个框架快速开始开发。
