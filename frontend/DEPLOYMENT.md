# Octopada.io - Vercel部署指南

## 🚀 快速部署步骤

### 方法1: Vercel CLI (推荐)

```bash
# 1. 安装Vercel CLI
npm i -g vercel

# 2. 登录Vercel
vercel login

# 3. 在项目目录部署
cd /app/frontend
vercel

# 4. 生产环境部署
vercel --prod
```

### 方法2: GitHub连接 (自动部署)

1. 将代码推送到GitHub仓库
2. 在Vercel.com连接GitHub
3. 选择仓库并自动部署

## 📁 项目结构
```
/app/frontend/
├── package.json       # 项目依赖
├── vercel.json       # Vercel配置
├── build/            # 构建输出 (自动生成)
├── src/              # 源代码
└── public/           # 静态资源
```

## ⚙️ 环境变量配置

在Vercel控制台设置环境变量：
- `REACT_APP_API_URL`: API接口地址
- 其他自定义环境变量

## 🌐 域名配置

### Squarespace域名配置:
1. 在Vercel添加自定义域名
2. 在Squarespace DNS设置中添加:
   - A记录: @ → 76.76.19.61
   - CNAME: www → [your-project].vercel.app

## 🔧 故障排除

### 常见问题:
1. **构建失败**: 检查依赖版本和语法错误
2. **路由问题**: vercel.json已配置SPA路由
3. **环境变量**: 确保以REACT_APP_开头

### 日志查看:
```bash
vercel logs [deployment-url]
```

## 📞 支持

- Vercel文档: https://vercel.com/docs
- React部署: https://create-react-app.dev/docs/deployment/

---
✨ **当前状态**: 项目已准备就绪，可以直接部署！